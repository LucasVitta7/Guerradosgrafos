// js/core/GameUI.js
GraphWarGame.prototype.updateUI = function() {
    if (!this.currentTurnEl) return; // DOM not ready or error

    this.currentTurnEl.textContent = this.currentTurn;
    this.reinforceCountEl.textContent = this.reinforcementsAvailable;

    this.reinforceBtn.disabled = this.gamePhase !== 'reinforcement' || this.reinforcementsAvailable <= 0 || this.currentPlayer !== 'player';
    this.attackBtn.disabled = (this.gamePhase === 'fortification') || this.currentPlayer !== 'player';
    this.fortifyBtn.disabled = (this.gamePhase === 'reinforcement') || this.currentPlayer !== 'player';
    this.endTurnBtn.disabled = this.currentPlayer !== 'player';

    const phaseNames = { reinforcement: 'Reforço', attack: 'Ataque', fortification: 'Fortificação' };
    this.currentPhaseEl.textContent = `Fase: ${phaseNames[this.gamePhase] || 'Indefinida'}`;

    this.reinforceBtn.classList.toggle('active', this.gamePhase === 'reinforcement');
    this.attackBtn.classList.toggle('active', this.gamePhase === 'attack');
    this.fortifyBtn.classList.toggle('active', this.gamePhase === 'fortification');

    this.territories.forEach(territory => {
        territory.element.classList.remove('selected');
        if (this.selectedTerritory === territory.id) {
            territory.element.classList.add('selected');
        }
    });
};

GraphWarGame.prototype.updateTerritoryDisplay = function(territoryId) {
    const territory = this.territories.find(t => t.id === territoryId);
    if (!territory || !territory.element) return;
    const element = territory.element;

    element.className = 'territory ' + territory.owner; // Base classes
    if (this.selectedTerritory === territory.id) {
        element.classList.add('selected');
    }
    element.querySelector('.armies').textContent = territory.armies;
};

GraphWarGame.prototype.updateGameStats = function() {
    if (!this.playerTerritoriesEl) return; // DOM not ready

    const playerTerritories = this.territories.filter(t => t.owner === 'player');
    const iaTerritories = this.territories.filter(t => t.owner === 'ia');

    this.playerTerritoriesEl.textContent = playerTerritories.length;
    this.iaTerritoriesEl.textContent = iaTerritories.length;

    const playerArmies = playerTerritories.reduce((sum, t) => sum + t.armies, 0);
    const iaArmies = iaTerritories.reduce((sum, t) => sum + t.armies, 0);

    this.playerArmiesEl.textContent = playerArmies;
    this.iaArmiesEl.textContent = iaArmies;
};

GraphWarGame.prototype.showMessage = function(message) {
    if (this.messageBox) this.messageBox.textContent = message;
};

GraphWarGame.prototype.addToBattleLog = function(message) {
    if (!this.battleLogEl) return;
    this.battleLog.push(message);
    if (this.battleLog.length > 10) this.battleLog.shift(); // Keep log concise

    this.battleLogEl.innerHTML = this.battleLog.map(msg => `<p>${msg}</p>`).join('');
    this.battleLogEl.scrollTop = this.battleLogEl.scrollHeight;
};