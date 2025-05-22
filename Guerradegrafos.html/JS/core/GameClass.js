// js/core/GameClass.js
class GraphWarGame {
    constructor() {
        this.territories = [];
        this.currentPlayer = 'player';
        this.currentTurn = 1;
        this.gamePhase = 'reinforcement'; // 'reinforcement', 'attack', 'fortification'
        this.selectedTerritory = null;    // ID of the currently selected territory by the player
        this.reinforcementsAvailable = 0;
        this.attackSource = null;         // ID of territory attacking from
        this.fortifySource = null;        // ID of territory fortifying from
        this.battleLog = [];

        // graphConfig será definido no GameSetup.js e anexado a 'this' lá,
        // ou poderia ser um módulo separado importado se usássemos ES Modules.
        // Por simplicidade com o escopo global, vamos definir em GameSetup.
        // this.graphConfig = {}; // Será preenchido

        // A ordem de chamada aqui é importante se os métodos dependem uns dos outros
        // initGame orquestrará a chamada dos métodos de setup.
        this.initGameInternalSequence();
    }

    initGameInternalSequence() {
        // Esses métodos virão dos outros arquivos e serão adicionados ao prototype
        this.defineGraphConfig();      // Define this.graphConfig
        this.setupDOMReferences();     // Define this.nodesLayer, etc.
        this.createGraph();            // Cria os elementos visuais do grafo
        this.setupEventListeners();    // Configura os listeners de eventos
        this.startGame();              // Inicia a lógica do jogo (primeiro turno, etc.)
    }
}