// js/core/GameRules.js
GraphWarGame.prototype.checkGameEnd = function() {
    if (!this.territories || this.territories.length === 0) return false; // Game not initialized

    const playerTerritoryCount = this.territories.filter(t => t.owner === 'player').length;
    const iaTerritoryCount = this.territories.filter(t => t.owner === 'ia').length;
    const totalTerritories = this.territories.length;

    // Check only after at least one turn has passed to avoid premature end on setup
    if (this.currentTurn === 0 && this.currentPlayer === null) return false; 

    if (playerTerritoryCount === 0 && iaTerritoryCount > 0) {
        this.showMessage('Fim de jogo! A IA venceu!');
        this.addToBattleLog('<strong style="color: var(--ia-color);">FIM DE JOGO - IA VENCEU!</strong>');
        this.disableGame();
        return true;
    } else if (iaTerritoryCount === 0 && playerTerritoryCount > 0) {
        this.showMessage('Fim de jogo! Você venceu!');
        this.addToBattleLog('<strong style="color: var(--player-color);">FIM DE JOGO - VOCÊ VENCEU!</strong>');
        this.disableGame();
        return true;
    } else if (playerTerritoryCount === totalTerritories && totalTerritories > 0) {
        this.showMessage('Fim de jogo! Você dominou todos os territórios!');
        this.addToBattleLog('<strong style="color: var(--player-color);">FIM DE JOGO - VOCÊ VENCEU!</strong>');
        this.disableGame();
        return true;
    } else if (iaTerritoryCount === totalTerritories && totalTerritories > 0) {
        this.showMessage('Fim de jogo! A IA dominou todos os territórios!');
        this.addToBattleLog('<strong style="color: var(--ia-color);">FIM DE JOGO - IA VENCEU!</strong>');
        this.disableGame();
        return true;
    }
    return false;
};

GraphWarGame.prototype.disableGame = function() {
    this.reinforceBtn.disabled = true;
    this.attackBtn.disabled = true;
    this.fortifyBtn.disabled = true;
    this.endTurnBtn.disabled = true;
    this.currentPlayer = null; // Stop any further player interaction triggers

    // Optionally, make territories unclickable
    // this.nodesLayer.removeEventListener('click', ...); // Or set a flag
    this.updateUI(); // Visually confirm disabled state
};