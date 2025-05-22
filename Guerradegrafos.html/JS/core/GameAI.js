// js/core/GameAI.js
GraphWarGame.prototype.executeIATurn = function() {
    if (this.checkGameEnd()) return;
    this.addToBattleLog(`Turno ${this.currentTurn} - Fase de Reforço (IA)`);

    // 1. IA Reinforcement
    const iaTerritories = this.territories.filter(t => t.owner === 'ia');
    if (iaTerritories.length === 0) { this.checkGameEnd(); return; }
    let iaReinforcements = Math.max(3, Math.floor(iaTerritories.length / 3));

    let reinforcementCandidates = iaTerritories.filter(t => t.neighbors.some(nId => this.territories.find(terr => terr.id === nId)?.owner === 'player'));
    if (reinforcementCandidates.length === 0) reinforcementCandidates = [...iaTerritories];
    reinforcementCandidates.sort((a, b) => a.armies - b.armies); // Reinforce weakest

    while (iaReinforcements > 0 && reinforcementCandidates.length > 0) {
        const targetTerritory = reinforcementCandidates[0];
        targetTerritory.armies += 1;
        iaReinforcements -= 1;
        this.updateTerritoryDisplay(targetTerritory.id);
        this.addToBattleLog(`IA reforçou ${targetTerritory.name} (agora ${targetTerritory.armies}).`);
        reinforcementCandidates.sort((a, b) => a.armies - b.armies); // Re-sort
        if (reinforcementCandidates[0].armies > 5 && reinforcementCandidates.length > 1) { // Simple load balance
             reinforcementCandidates.shift();
             if(reinforcementCandidates.length === 0) reinforcementCandidates = iaTerritories.sort((a,b) => a.armies - b.armies);
        }
    }
    this.updateGameStats();

    // 2. IA Attack Phase
    this.addToBattleLog(`Turno ${this.currentTurn} - Fase de Ataque (IA)`);
    let attackedCount = 0;
    const maxAttacksPerTurn = 3; // Limit IA attacks

    for (let i = 0; i < maxAttacksPerTurn; i++) {
        if (this.checkGameEnd()) return;
        const possibleAttackers = iaTerritories.filter(t => t.armies > 2); // Need more than 2 to be somewhat safe
        if (possibleAttackers.length === 0) break;

        let bestAttack = null;
        let bestScore = -Infinity;

        for (const attacker of possibleAttackers) {
            const validTargets = attacker.neighbors
                .map(id => this.territories.find(t => t.id === id))
                .filter(target => target && target.owner !== 'ia');

            for (const defender of validTargets) {
                let score = (attacker.armies - defender.armies * 1.5); // Prefer favorable odds
                if (defender.owner === 'player') score += 100; // Prioritize player
                if (defender.owner === 'neutral') score += (attacker.armies > 2 ? 10 : 0); // Bonus for neutrals if IA has spare
                
                if (score > bestScore) {
                    bestScore = score;
                    bestAttack = { attacker, defender };
                }
            }
        }
        
        if (bestAttack && bestAttack.attacker.armies > bestAttack.defender.armies + 1 ) { // Attack if significantly stronger
            this.addToBattleLog(`IA ataca de ${bestAttack.attacker.name} para ${bestAttack.defender.name}.`);
            // Simulate resolveAttack logic for IA
            const attacker = bestAttack.attacker;
            const defender = bestAttack.defender;

            if (defender.owner === 'neutral') {
                defender.owner = 'ia';
                const armiesToMove = Math.min(attacker.armies - 1, Math.max(1, Math.floor((attacker.armies -1) / 2) + ((attacker.armies -1) % 2) ));
                attacker.armies -= armiesToMove;
                defender.armies = armiesToMove;
                this.addToBattleLog(`IA conquistou ${defender.name} (neutro).`);
            } else { // Battle player
                const maxAttackingDice = Math.min(3, attacker.armies - 1);
                const maxDefendingDice = Math.min(2, defender.armies);
                const attackRolls = Array.from({ length: maxAttackingDice }, () => Math.floor(Math.random() * 6) + 1).sort((a, b) => b - a);
                const defenseRolls = Array.from({ length: maxDefendingDice }, () => Math.floor(Math.random() * 6) + 1).sort((a, b) => b - a);
                let attackerLosses = 0; let defenderLosses = 0;
                const comparisons = Math.min(attackRolls.length, defenseRolls.length);
                for (let k = 0; k < comparisons; k++) {
                    if (attackRolls[k] > defenseRolls[k]) defenderLosses++; else attackerLosses++;
                }
                attacker.armies -= attackerLosses;
                defender.armies -= defenderLosses;

                const attackDiceHtml = attackRolls.map(r => `<span class="dice ia-dice">${r}</span>`).join('');
                const defenseDiceHtml = defenseRolls.map(r => `<span class="dice player-dice">${r}</span>`).join('');

                if (defender.armies <= 0) {
                    defender.owner = 'ia';
                    const armiesToMoveAfterWin = Math.min(attacker.armies - 1, Math.max(1, maxAttackingDice - attackerLosses));
                     if(attacker.armies - armiesToMoveAfterWin >=1){
                        attacker.armies -= armiesToMoveAfterWin;
                        defender.armies = armiesToMoveAfterWin;
                    } else {
                        defender.armies = attacker.armies -1;
                        attacker.armies = 1;
                    }
                    this.addToBattleLog(`<b>IA Conquistou!</b> ${attacker.name} tomou ${defender.name}.<br>Dados: ${attackDiceHtml} vs ${defenseDiceHtml}.<br>Perdas: IA ${attackerLosses}, Jogador ${defenderLosses}.`);
                } else {
                    this.addToBattleLog(`<b>Batalha (IA)!</b> ${attacker.name} vs ${defender.name}.<br>Dados: ${attackDiceHtml} vs ${defenseDiceHtml}.<br>Perdas: IA ${attackerLosses}, Jogador ${defenderLosses}.<br>${defender.name} resistiu com ${defender.armies}.`);
                }
            }
            this.updateTerritoryDisplay(attacker.id);
            this.updateTerritoryDisplay(defender.id);
            this.updateGameStats();
            attackedCount++;
        } else {
            break; // No good attack
        }
    }
    if (attackedCount === 0) this.addToBattleLog("IA não realizou ataques.");

    // 3. IA Fortification Phase
    this.addToBattleLog(`Turno ${this.currentTurn} - Fase de Fortificação (IA)`);
    const iaTerritoriesAgain = this.territories.filter(t => t.owner === 'ia');
    const borderTerrs = iaTerritoriesAgain.filter(t => t.neighbors.some(nId => this.territories.find(terr => terr.id === nId)?.owner !== 'ia')).sort((a,b) => a.armies - b.armies); // Weakest border
    const interiorTerrs = iaTerritoriesAgain.filter(t => t.armies > 2 && t.neighbors.every(nId => this.territories.find(terr => terr.id === nId)?.owner === 'ia')).sort((a,b) => b.armies - a.armies); // Strongest interior

    if (borderTerrs.length > 0 && interiorTerrs.length > 0) {
        const target = borderTerrs[0]; // Weakest border
        let sourceToFortify = null;
        let maxMovableFromSource = 0;

        // Find best interior source that can reach target (simplified: adjacent)
        for (const interior of interiorTerrs) {
            if (interior.neighbors.includes(target.id) || this.areTerritoriesConnectedByOwner(interior.id, target.id, 'ia')) { // Check if interior can fortify target
                const movable = Math.floor((interior.armies - 1) / 2);
                if (movable > maxMovableFromSource) {
                    maxMovableFromSource = movable;
                    sourceToFortify = interior;
                }
            }
        }
        if (!sourceToFortify && interiorTerrs.length > 0) { // If no direct path, try to move from strongest interior to an adjacent IA territory towards border
             sourceToFortify = interiorTerrs[0];
             // find an adjacent IA territory to source that is closer to a border, or just any adjacent IA territory
             let intermediateTarget = sourceToFortify.neighbors
                .map(id => this.territories.find(t => t.id === id))
                .filter(n => n && n.owner === 'ia' && n.id !== target.id) // Don't move back to the weakest border if it's already the target
                .sort((a,b) => a.armies - b.armies)[0]; // Move to a weaker adjacent IA territory
            if(intermediateTarget) target = intermediateTarget; // redirect fortification
        }


        if (sourceToFortify && target && sourceToFortify.id !== target.id && maxMovableFromSource > 0) {
            sourceToFortify.armies -= maxMovableFromSource;
            target.armies += maxMovableFromSource;
            this.updateTerritoryDisplay(sourceToFortify.id);
            this.updateTerritoryDisplay(target.id);
            this.addToBattleLog(`IA moveu ${maxMovableFromSource} tropas de ${sourceToFortify.name} para ${target.name}.`);
            this.updateGameStats();
        } else {
            this.addToBattleLog("IA não realizou fortificações.");
        }
    } else {
        this.addToBattleLog("IA não realizou fortificações (sem condições).");
    }
    
    this.showMessage('Turno da IA concluído. Seu turno!');
    this.addToBattleLog('Turno da IA concluído.');
    if (this.checkGameEnd()) return;
    this.currentPlayer = 'player';
    this.startPlayerTurn();
};

// Helper for IA fortification - basic check, not full pathfinding
GraphWarGame.prototype.areTerritoriesConnectedByOwner = function(startId, endId, owner) {
    if (startId === endId) return true;
    let visited = new Set();
    let queue = [startId];
    visited.add(startId);

    while (queue.length > 0) {
        let currentId = queue.shift();
        const currentTerritory = this.territories.find(t => t.id === currentId);
        if (!currentTerritory) continue;

        for (const neighborId of currentTerritory.neighbors) {
            if (neighborId === endId) return true;
            const neighbor = this.territories.find(t => t.id === neighborId);
            if (neighbor && neighbor.owner === owner && !visited.has(neighborId)) {
                visited.add(neighborId);
                queue.push(neighborId);
            }
        }
    }
    return false;
};