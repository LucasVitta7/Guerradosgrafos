// js/core/GameSetup.js
GraphWarGame.prototype.defineGraphConfig = function() {
    this.graphConfig = {
        nodes: [
            { id: 0, name: 'Floresta', x: 15, y: 20 }, { id: 1, name: 'Montanha', x: 25, y: 40 },
            { id: 2, name: 'Deserto', x: 35, y: 20 }, { id: 3, name: 'Planície', x: 20, y: 60 },
            { id: 4, name: 'Pântano', x: 40, y: 50 }, { id: 5, name: 'Cidade', x: 30, y: 30 },
            { id: 6, name: 'Vale', x: 60, y: 30 }, { id: 7, name: 'Lago', x: 50, y: 70 },
            { id: 8, name: 'Colina', x: 70, y: 50 }, { id: 9, name: 'Caverna', x: 80, y: 30 },
            { id: 10, name: 'Ruínas', x: 65, y: 65 }, { id: 11, name: 'Fortaleza', x: 85, y: 60 }
        ],
        edges: [
            [0, 1], [0, 3], [0, 5], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [2, 6],
            [3, 4], [3, 7], [4, 5], [4, 6], [4, 7], [4, 8], [5, 6], [6, 8], [6, 9],
            [7, 8], [7, 10], [8, 9], [8, 10], [8, 11], [9, 11], [10, 11]
        ]
    };
};

GraphWarGame.prototype.setupDOMReferences = function() {
    this.nodesLayer = document.getElementById('nodes-layer');
    this.edgesLayer = document.getElementById('edges-layer');
    this.messageBox = document.getElementById('message-box');
    this.battleLogEl = document.getElementById('battle-log');
    this.reinforceBtn = document.getElementById('reinforce-btn');
    this.attackBtn = document.getElementById('attack-btn');
    this.fortifyBtn = document.getElementById('fortify-btn');
    this.endTurnBtn = document.getElementById('end-turn-btn');
    this.playerTerritoriesEl = document.getElementById('player-territories');
    this.iaTerritoriesEl = document.getElementById('ia-territories');
    this.playerArmiesEl = document.getElementById('player-armies');
    this.iaArmiesEl = document.getElementById('ia-armies');
    this.currentTurnEl = document.getElementById('current-turn');
    this.currentPhaseEl = document.getElementById('current-phase');
    this.reinforceCountEl = document.getElementById('reinforce-count');
};

GraphWarGame.prototype.createGraph = function() {
    this.nodesLayer.innerHTML = '';
    if (this.edgesLayer) this.edgesLayer.innerHTML = ''; // Check if SVG is ready
    this.territories = [];

    this.graphConfig.edges.forEach(edge => {
        const [sourceId, targetId] = edge;
        const sourceNode = this.graphConfig.nodes.find(n => n.id === sourceId);
        const targetNode = this.graphConfig.nodes.find(n => n.id === targetId);

        if (sourceNode && targetNode && this.edgesLayer) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', `${sourceNode.x}%`);
            line.setAttribute('y1', `${sourceNode.y}%`);
            line.setAttribute('x2', `${targetNode.x}%`);
            line.setAttribute('y2', `${targetNode.y}%`);
            line.setAttribute('class', 'graph-edge'); // Class for styling
            this.edgesLayer.appendChild(line);
        }
    });

    this.graphConfig.nodes.forEach(node => {
        const territoryDiv = document.createElement('div');
        territoryDiv.className = 'territory neutral';
        territoryDiv.dataset.id = node.id;
        territoryDiv.style.left = `${node.x}%`;
        territoryDiv.style.top = `${node.y}%`;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = node.name;

        const armiesSpan = document.createElement('span');
        armiesSpan.className = 'armies';
        armiesSpan.textContent = '1'; // Initial armies for neutral

        territoryDiv.appendChild(nameSpan);
        territoryDiv.appendChild(armiesSpan);
        this.nodesLayer.appendChild(territoryDiv);

        this.territories.push({
            id: node.id,
            name: node.name,
            element: territoryDiv,
            owner: 'neutral',
            armies: 1,
            x: node.x,
            y: node.y,
            neighbors: this.graphConfig.edges
                .filter(edge => edge.includes(node.id))
                .map(edge => edge.find(id => id !== node.id))
        });
    });
    this.distributeInitialTerritories();
};

GraphWarGame.prototype.distributeInitialTerritories = function() {
    const shuffledTerritories = [...this.territories].sort(() => Math.random() - 0.5);
    if (shuffledTerritories.length === 0) return;

    shuffledTerritories[0].owner = 'player';
    shuffledTerritories[0].armies = 5;
    this.updateTerritoryDisplay(shuffledTerritories[0].id);

    let farthestTerritory = this.findFarthestTerritory(shuffledTerritories[0]);
    if (farthestTerritory) {
        farthestTerritory.owner = 'ia';
        farthestTerritory.armies = 5;
        this.updateTerritoryDisplay(farthestTerritory.id);
    } else if (shuffledTerritories.length > 1) {
        // Fallback: if no neutral territory is found for farthest, pick the next available neutral
        const nextNeutral = shuffledTerritories.find(t => t.id !== shuffledTerritories[0].id && t.owner === 'neutral');
        if (nextNeutral) {
            nextNeutral.owner = 'ia';
            nextNeutral.armies = 5;
            this.updateTerritoryDisplay(nextNeutral.id);
        }
    }
};

GraphWarGame.prototype.findFarthestTerritory = function(fromTerritory) {
    let maxDistance = -1;
    let farthest = null;
    this.territories.forEach(territory => {
        if (territory.owner === 'neutral' && territory.id !== fromTerritory.id) {
            const dx = territory.x - fromTerritory.x;
            const dy = territory.y - fromTerritory.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > maxDistance) {
                maxDistance = distance;
                farthest = territory;
            }
        }
    });
    return farthest || this.territories.find(t => t.owner === 'neutral' && t.id !== fromTerritory.id);
};

GraphWarGame.prototype.startGame = function() {
    this.currentTurn = 1;
    this.currentPlayer = 'player';
    this.startPlayerTurn(); // This method will be in GameActions.js
    this.updateGameStats(); // This method will be in GameUI.js
    this.addToBattleLog('Jogo iniciado! Boa sorte!'); // This method will be in GameUI.js
};