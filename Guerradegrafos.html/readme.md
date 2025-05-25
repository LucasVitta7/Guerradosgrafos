# 🎮 Guerra de Grafos

Um jogo de estratégia baseado em grafos onde o objetivo é conquistar todos os territórios do mapa enfrentando uma inteligência artificial (IA). Desenvolvido como um projeto educativo e visualmente atrativo, o jogo combina conceitos de algoritmos de grafos com fases de reforço, ataque e fortificação.

---

## 📌 O que o projeto faz

O **Guerra de Grafos** simula um jogo de guerra por territórios em que o jogador humano enfrenta a IA em turnos. A cada turno, os jogadores recebem reforços, atacam territórios inimigos e movimentam tropas. A lógica do jogo é baseada em estruturas de grafos, com territórios representando nós e conexões como arestas.

---

## 🛠️ Tecnologias utilizadas

- **HTML5** – Estrutura da interface do jogo  
- **CSS3** – Estilização e layout responsivo  
- **JavaScript (Vanilla)** – Lógica do jogo, IA, regras e controle de turno  
- **SVG** – Renderização das conexões (arestas) entre os territórios  
- **Vídeo e imagens** – Para ambientação visual e regras  

---

## 💡 Por que foi construído

O **Guerra de Grafos** foi desenvolvido com fins educacionais e experimentais, com o objetivo de unir teoria e prática em um projeto interativo. A ideia principal foi aplicar conceitos de algoritmos e estruturas de dados, especialmente a **Teoria dos Grafos**, em um ambiente visual e dinâmico.

Este projeto busca:

- Explorar a **aplicação prática da Teoria dos Grafos** no contexto de jogos digitais.
- Exercitar a **lógica de turnos** e a criação de uma **IA simples**, capaz de tomar decisões estratégicas.
- Desenvolver uma interface web **interativa, visualmente atrativa e responsiva**, utilizando apenas HTML, CSS e JavaScript puro (sem frameworks).
- Integrar de forma eficiente a **lógica de programação com elementos gráficos e de jogabilidade**, promovendo uma experiência fluida e educativa.

O projeto também serve como uma base sólida para quem deseja entender como construir um jogo de estratégia a partir do zero, com foco em estruturação de código, organização de fases do jogo e tomada de decisões automatizadas.

---

## 📋 Pré-requisitos

- 💻 **Sistema operacional:** Windows, macOS, Linux ou outro com suporte a navegador moderno  
- 🌐 **Navegador web:**  
  - ✅ Google Chrome (recomendado)  
  - ✅ Firefox  
  - ✅ Microsoft Edge  
  - ✅ Safari  
- 📁 **Nenhuma instalação necessária.** Basta abrir o arquivo `index.html` com um navegador moderno.

---

# 🧭 Instruções de instalação

##Siga os passos abaixo para instalar e executar o jogo Guerra de Grafos no seu computador:

🔽 1. Faça o download ou clone o repositório
Você pode escolher entre duas opções:

Opção A – Download ZIP

Acesse o repositório no GitHub.

Clique no botão verde "Code" e selecione "Download ZIP".

Extraia o conteúdo do arquivo .zip para uma pasta local no seu computador.

Opção B – Clonar com Git
Se você tiver o Git instalado, abra o terminal ou prompt de comando e digite:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/guerra-de-grafos.git
Isso criará uma cópia do projeto na pasta guerra-de-grafos.

📁 2. Acesse a pasta do projeto
No seu gerenciador de arquivos, abra a pasta onde os arquivos foram extraídos ou clonados.

🌐 3. Execute o jogo
Localize o arquivo chamado index.html.

Clique duas vezes sobre ele para abrir no seu navegador padrão (Chrome, Firefox, Edge etc.).

✅ Pronto! O jogo será carregado automaticamente, sem necessidade de instalação adicional.

# Jogabilidade

🧩 Como o jogo funciona
O jogo é dividido em turnos alternados entre o jogador e a IA. Cada turno é composto por 3 fases:

🔶 1. Fase de Reforço
Você recebe tropas extras com base na quantidade de territórios controlados (mínimo de 3 por turno).

Essas tropas podem ser distribuídas clicando nos seus territórios diretamente no mapa.

Use o botão "Reforçar" para adicionar tropas ao território selecionado.

🔺 2. Fase de Ataque
Clique em um território seu com mais de 1 tropa.

Depois, clique em um território inimigo vizinho para atacar.

O resultado do combate é calculado automaticamente.

🛡️ 3. Fase de Fortificação
Movimente tropas entre dois territórios seus conectados.

Fortifique regiões estratégicas ou prepare futuros ataques.

✅ Terminar Turno
Clique em "Terminar Turno" para passar a vez à IA.

A IA executará suas ações automaticamente.

🧠 Como vencer
Você vence ao conquistar todos os territórios.

Você perde se a IA dominar todos os seus territórios.

🖱️ Interface e Controles
Clique nos territórios para selecionar ações.

Use os botões do painel lateral para executar comandos.

Veja as regras clicando em "Regras".

Acompanhe as jogadas no registro de batalha.

# instrocões de codigo

## Parte referente ao html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guerra de Grafos</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
```
Define o documento como HTML5 (<!DOCTYPE html>).

```html
<html lang="pt-BR">: Define a linguagem da página como português brasileiro.

<head>: Cabeçalho do documento, contém metadados.

<meta charset="UTF-8">: Define a codificação de caracteres para UTF-8.

<meta name="viewport"...>: Configura a viewport para responsividade em dispositivos móveis.

<title>: Define o título da aba/janela do navegador.

<link rel="stylesheet" href="css/style.css">: Inclui o arquivo CSS principal da página para estilos.

<link href="https://fonts.googleapis.com/...">: Importa a fonte Roboto do Google Fonts.
```
<body>: Início do corpo da página, onde fica o conteúdo visível.
    <video src="./img/bg-video.mp4" loop autoplay muted style="position: absolute;"></video>
Insere um vídeo de fundo que toca em loop automático, sem som (muted).

style="position: absolute;" posiciona o vídeo para que fique atrás do conteúdo.
```html
    <div class="game-container">
        <header>
            <h1>Guerra de Grafos</h1>
            <div class="game-stats">
                <div class="stat-box player">
                    <span>Jogador</span>
                    <span id="player-territories">0</span> territórios
                    <span id="player-armies">0</span> tropas
                </div>
                <div class="turn-info">
                    <span>Turno <span id="current-turn">1</span></span>
                    <span id="current-phase">Fase: Reforço</span>
                </div>
                <div class="stat-box ia">
                    <span>IA</span>
                    <span id="ia-territories">0</span> territórios
                    <span id="ia-armies">0</span> tropas
                </div>
            </div>
        </header>
<div class="game-container">: Container principal do jogo.

<header>: Cabeçalho do jogo com título e estatísticas.

<h1>: Título do jogo exibido na página.

<div class="game-stats">: Seção que agrupa as estatísticas do jogo.

<div class="stat-box player">: Caixa de estatísticas do jogador.

<span id="player-territories">0</span>: Quantidade de territórios do jogador, atualizado dinamicamente pelo JS.

<span id="player-armies">0</span>: Quantidade de tropas do jogador, também atualizada pelo JS.

<div class="turn-info">: Exibe o turno atual e a fase do jogo.

<span id="current-turn">1</span>: Número do turno atual.

<span id="current-phase">Fase: Reforço</span>: Indica a fase atual do jogo.

<div class="stat-box ia">: Caixa de estatísticas da IA (inteligência artificial).

Elementos similares aos do jogador para territórios e tropas da IA.
```
```html
        <main>
            <div id="graph-container">
                <svg id="edges-layer" width="100%" height="100%"></svg>
                <div id="nodes-layer"></div>
            </div>
<main>: Área principal do conteúdo do jogo.

<div id="graph-container">: Container que contém o grafo do jogo.

<svg id="edges-layer" ...>: Camada SVG usada para desenhar as arestas (ligações) entre territórios.

<div id="nodes-layer"></div>: Camada para os nós (territórios) do grafo, que provavelmente são elementos HTML dinâmicos.
```
```html
            <div class="control-panel">
                <div id="message-box">Selecione um território para começar</div>
                <div id="battle-log" class="battle-log"></div>
                <div class="action-buttons">
                    <button id="reinforce-btn" class="btn reinforce">Reforçar (+<span id="reinforce-count">3</span>)</button>
                    <button id="attack-btn" class="btn attack">Atacar</button>
                    <button id="fortify-btn" class="btn fortify">Fortificar</button>
                    <button id="end-turn-btn" class="btn end-turn">Terminar Turno</button>
                    <button id="rules-btn" class="btn rules">Regras</button>
                </div>
            </div>
        </main>
<div class="control-panel">: Painel lateral com controles e informações do jogo.

<div id="message-box">: Caixa para mensagens ao jogador (ex: dicas, alertas).

<div id="battle-log" class="battle-log"></div>: Área para o registro do log de batalhas, mensagens adicionadas dinamicamente.

<div class="action-buttons">: Contém botões para ações do jogador.

reinforce-btn: Botão para reforçar tropas.

attack-btn: Botão para atacar.

fortify-btn: Botão para fortificar.

end-turn-btn: Botão para terminar o turno.

rules-btn: Botão que abre as regras do jogo.


    </div>
    <div id="rules-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">×</span>
            <h2>Regras do Jogo</h2>
            <img id="rules-image" src="img/regras.png" alt="Regras do Jogo Guerra de Grafos">
        </div>
    </div>
<div id="rules-modal" class="modal">: Modal (janela popup) que exibe as regras do jogo.

<div class="modal-content">: Conteúdo da modal.

<span class="close-button">×</span>: Botão para fechar a modal.

<h2>: Título da seção de regras.

<img id="rules-image"...>: Imagem que mostra as regras detalhadas.

    <script src="js/core/GameClass.js"></script>
    <script src="js/core/GameSetup.js"></script>
    <script src="js/core/GameUI.js"></script>
    <script src="js/core/GameActions.js"></script>
    <script src="js/core/GameAI.js"></script>
    <script src="js/core/GameRules.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
Inclusão dos scripts JavaScript que carregam a lógica do jogo:

GameClass.js: Classe principal do jogo e dados do estado.

GameSetup.js: Inicialização e configuração do jogo.

GameUI.js: Atualização e manipulação da interface.

GameActions.js: Definição das ações do jogador.

GameAI.js: Lógica da inteligência artificial.

GameRules.js: Regras do jogo aplicadas.

main.js: Script principal que inicializa o jogo e gerencia eventos globais.

Fecha as tags <body> e <html>.
```
# Parte referente ao css

🎨 1. Definindo variáveis globais com :root
css

    --player-color: #4CAF50;         /* Cor dos territórios do jogador */
    --ia-color: #F44336;             /* Cor dos territórios da IA */
    --neutral-color: #757575;        /* Cor dos territórios neutros */
    --edge-color: #546E7A;           /* Cor das arestas (ligações entre territórios) */
    --background: #121212;           /* Cor de fundo da página */
    --panel-bg: rgba (30, 30, 30, 0.5); /* Fundo translúcido para painéis (tem erro aqui: o espaço em 'rgba (' deve ser removido) */
    --text-dark: #E0E0E0;            /* Cor principal do texto */
    --text-light: #FFFFFF;           /* Cor clara para títulos e destaques */
    --card-bg: #2D2D2D;              /* Cor de fundo de cartões, painéis, caixas */
    --border-color: #424242;         /* Cor padrão de bordas */
:root { ... }: Define variáveis globais para reutilização em todo o CSS.

Cada linha declara uma variável que pode ser chamada usando a função var(--nome-da-variavel).

🧹 2. Resetando margens e box model

```html
{
    box-sizing: border-box; /* Inclui padding e borda dentro da largura total */
    margin: 0;              /* Remove margens padrões */
    padding: 0;             /* Remove espaçamentos internos padrões */
}
* { ... }: Aplica as regras a todos os elementos da página, garantindo consistência no layout.

```
🖼 3. Estilizando o corpo da página
```html
body {
    font-family: 'Roboto', sans-serif;   /* Fonte principal */
    background-color: var(--background); /* Usa a cor definida no :root */
    color: var(--text-dark);             /* Cor do texto */
    line-height: 1.6;                    /* Espaçamento entre linhas */
}
body { ... }: Define os estilos básicos para toda a página.
```
🧩 4. Container principal do jogo
```html
.game-container {
    max-width: 1200px;                             /* Largura máxima */
    margin: 20px auto;                             /* Centraliza horizontalmente */
    padding: 20px;                                 /* Espaço interno */
    backdrop-filter: blur(15px);                   /* Aplica desfoque ao fundo */
    background-color: var(--panel-bg);             /* Fundo translúcido */
    border-radius: 10px;                           /* Cantos arredondados */
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);         /* Sombra para profundidade */
}
.game-container { ... }: Define a área principal que envolve os elementos do jogo.
```
🧱 5. Cabeçalho (header)
```html
header {
    display: flex;                /* Layout flexível */
    flex-direction: column;      /* Itens empilhados verticalmente */
    align-items: center;         /* Centraliza horizontalmente */
    margin-bottom: 20px;         /* Espaço inferior */
    padding-bottom: 15px;        /* Espaço interno inferior */
    border-bottom: 1px solid var(--border-color); /* Linha inferior */
}
header { ... }: Estiliza o cabeçalho, definindo alinhamento e separação visual do restante da página.

```
🧾 6. Título principal
```html
h1 {
    color: var(--text-light);                            /* Cor do texto */
    margin-bottom: 15px;                                 /* Espaço inferior */
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);               /* Sombra no texto */
}
h1 { ... }: Configura a aparência do título principal do jogo.
```
📊 7. Estatísticas do jogo
```html
.game-stats {
    display: flex;             /* Layout em linha */
    justify-content: space-between; /* Espaçamento entre as caixas */
    width: 100%;               /* Largura total */
    margin-top: 10px;          /* Espaço acima */
}
.game-stats { ... }: Estrutura a área onde são mostradas as estatísticas do jogo, como territórios e tropas.

```
📦 8. Caixa de estatísticas
```html
.stat-box {
    padding: 10px 15px;                            /* Espaço interno */
    border-radius: 8px;                            /* Cantos arredondados */
    text-align: center;                            /* Alinhamento central */
    font-weight: bold;                             /* Texto em negrito */
    width: 30%;                                    /* Ocupa 30% da linha */
    background-color: var(--card-bg);              /* Fundo */
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);          /* Sombra */
}
.stat-box { ... }: Define estilos para cada caixa que mostra as estatísticas (tanto do jogador quanto da IA).

```
🧑‍✈️ 9. Bordas coloridas por tipo de jogador
```html
.player {
    border-left: 5px solid var(--player-color); /* Borda verde à esquerda */
}
.ia {
    border-left: 5px solid var(--ia-color);     /* Borda vermelha à esquerda */
}
.player e .ia: Usados em conjunto com .stat-box para indicar visualmente a quem pertencem as estatísticas.
```
⏱ 10. Informações de turno
```html
.turn-info {
    display: flex;                    /* Layout flexível */
    flex-direction: column;          /* Coluna */
    align-items: center;             /* Centraliza horizontalmente */
    justify-content: center;         /* Centraliza verticalmente */
    background-color: var(--card-bg);/* Fundo escuro */
    padding: 10px;                   /* Espaço interno */
    border-radius: 8px;              /* Cantos arredondados */
    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Sombra */
}
.turn-info { ... }: Exibe informações sobre o turno atual, centralizando e destacando visualmente essa área.

```
11. Container do Grafo (#graph-container)
```html
#graph-container {
    position: relative;                         /* Permite posicionamento absoluto dos elementos filhos */
    width: 100%;                                /* Ocupa 100% da largura disponível */
    height: 500px;                              /* Altura fixa para exibir o grafo */
    background-color: var(--card-bg);           /* Fundo escuro para o grafo */
    border-radius: 8px;                         /* Cantos arredondados */
    overflow: hidden;                           /* Esconde conteúdos que excedam os limites */
    margin-bottom: 20px;                        /* Espaço abaixo do container */
    border: 1px solid var(--border-color);       /* Borda fina ao redor do container */
}
#graph-container { ... }: Define a área onde o grafo (territórios e conexões) será renderizado.

```
12. Camada de Arestas (#edges-layer)
```html
#edges-layer {
    position: absolute;    /* Posicionamento absoluto dentro do container */
    top: 0;                /* Alinha ao topo */
    left: 0;               /* Alinha à esquerda */
    z-index: 1;            /* Coloca abaixo de outros elementos (como os nós) */
}
#edges-layer { ... }: Responsável por renderizar as linhas que conectam os territórios.
```
13. Estilização das Arestas (.graph-edge)
```html
.graph-edge {
    stroke: var(--edge-color);  /* Define a cor da linha */
    stroke-width: 3;           /* Espessura da linha */
}
.graph-edge { ... }: Aplica os estilos (cor e espessura) às linhas que representam conexões entre os territórios.
```

14. Camada dos Nós (#nodes-layer)
```html
#nodes-layer {
    position: absolute;   /* Posicionamento absoluto para sobrepor a camada de arestas */
    top: 0;               /* Alinha ao topo */
    left: 0;              /* Alinha à esquerda */
    width: 100%;          /* Ocupa a largura total do container */
    height: 100%;         /* Ocupa toda a altura do container */
    z-index: 2;           /* Fica acima das arestas */
}
#nodes-layer { ... }: Área onde os nós (territórios) são renderizados e posicionados.

```

15. Estilização dos Territórios
```html
.territory {
    position: absolute;                       /* Permite posicionamento livre dentro do container */
    width: 80px;                              /* Largura fixa do território */
    height: 80px;                             /* Altura fixa do território */
    border-radius: 50%;                       /* Torna o território circular */
    display: flex;                            /* Usa flexbox para centralizar conteúdo interno */
    flex-direction: column;                   /* Organiza o conteúdo em coluna */
    justify-content: center;                  /* Centraliza verticalmente */
    align-items: center;                      /* Centraliza horizontalmente */
    cursor: pointer;                          /* Altera o cursor para indicar que é clicável */
    font-weight: bold;                        /* Texto em negrito */
    transition: all 0.3s ease;                /* Animações suaves para transformações */
    transform: translate(-50%, -50%);         /* Centraliza o elemento em relação à posição definida */
    z-index: 10;                              /* Garante que esteja acima de outros elementos */
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);      /* Sombra para profundidade */
    border: 3px solid transparent;            /* Borda invisível inicialmente (pode ser alterada em estados hover/selected) */
}
.territory { ... }: Define o estilo base para os territórios exibidos no grafo.

```
15.2. Cores de Territórios
```html
.territory.neutral {
    background-color: var(--neutral-color); /* Fundo para territórios neutros */
    color: white;
}

.territory.player {
    background-color: var(--player-color);  /* Fundo para territórios do jogador */
    color: white;
}

.territory.ia {
    background-color: var(--ia-color);      /* Fundo para territórios da IA */
    color: white;
}
.territory.neutral, .territory.player e .territory.ia: Aplicam cores diferentes conforme o proprietário do território.

```

15.3. Território Selecionado
```html
.territory.selected {
    border: 3px solid #FFC107; /* Borda amarela para destacar o território selecionado */
    box-shadow: 0 0 15px #FFC107; /* Sombra amarela para dar ênfase */
}
.territory.selected { ... }: Destaca visualmente um território quando ele está selecionado.

15.4. Elementos Internos dos Territórios
css
Copiar
Editar
.territory .name {
    font-size: 12px;               /* Tamanho reduzido para o nome */
    margin-bottom: 5px;            /* Espaço abaixo do nome */
    text-align: center;           /* Centraliza o texto */
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);  /* Sombra para legibilidade */
}

.territory .armies {
    font-size: 18px;              /* Tamanho maior para o número de tropas */
    font-weight: bold;            /* Texto em negrito */
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);  /* Sombra para destaque */
}
.territory .name e .territory .armies { ... }: Estilizam os elementos internos dos territórios, como o nome e o número de exércitos.
```

16. Painel de Controle
```html
.control-panel {
    background-color: var(--card-bg); /* Fundo escuro para o painel */
    padding: 15px;                    /* Espaçamento interno */
    border-radius: 8px;               /* Cantos arredondados */
    box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Sombra leve */
}
.control-panel { ... }: Estiliza a área onde ficam as mensagens, log de batalhas e botões de ação.
```

17. Caixa de Mensagens
```html
#message-box {
    padding: 12px;                         /* Espaçamento interno */
    margin-bottom: 15px;                   /* Espaço abaixo da caixa */
    background-color: #0D47A1;               /* Fundo azul para destaque */
    border-left: 4px solid #2196F3;          /* Barra lateral azul */
    border-radius: 4px;                      /* Cantos levemente arredondados */
    font-size: 16px;                         /* Tamanho de fonte legível */
    color: white;                           /* Texto branco */
    min-height: 60px;                       /* Altura mínima para consistência */
}
#message-box { ... }: Exibe mensagens para o jogador com destaque visual e espaçamento adequado.
```

18. Log de Batalha
```html
.battle-log {
    max-height: 120px;                          /* Altura máxima para o log */
    overflow-y: auto;                           /* Permite rolagem vertical se o conteúdo exceder a altura */
    margin-bottom: 15px;                        /* Espaço abaixo do log */
    padding: 10px;                              /* Espaçamento interno */
    background-color: rgba(0, 0, 0, 0.2);         /* Fundo semi-transparente */
    border-radius: 4px;                         /* Cantos arredondados */
    font-size: 14px;                            /* Tamanho de fonte menor para o log */
    border: 1px solid var(--border-color);       /* Borda para delimitar a área */
}
.battle-log { ... }: Área onde são exibidas mensagens do log (por exemplo, eventos de batalha), com rolagem e estilo bem definido.
```

19. Estilização dos Parágrafos no Log
```html
.battle-log p {
    margin: 5px 0;                     /* Margem vertical para espaçamento entre parágrafos */
    padding: 3px 0;                    /* Pequeno espaço interno vertical */
    border-bottom: 1px dashed var(--border-color);  /* Linha tracejada abaixo de cada mensagem */
}
.battle-log p { ... }: Ajusta o espaçamento e separação de cada mensagem dentro do log.
```

20. Container dos Botões de Ação
```html
.action-buttons {
    display: flex;       /* Distribui os botões em linha */
    gap: 10px;           /* Espaço entre os botões */
    flex-wrap: wrap;     /* Permite que os botões quebrem para uma nova linha em telas menores */
}
.action-buttons { ... }: Organiza os botões de ação, garantindo que se ajustem bem em diferentes tamanhos de tela.
```

21. Estilização Base dos Botões (.btn)
```html
.btn {
    padding: 12px 20px;            /* Espaçamento interno */
    border: none;                 /* Remove a borda padrão */
    border-radius: 5px;           /* Arredonda os cantos */
    font-weight: bold;            /* Texto em negrito */
    cursor: pointer;              /* Cursor pointer para indicar interatividade */
    transition: all 0.2s;         /* Suaviza as transições visuais */
    flex: 1;                      /* Permite que os botões cresçam igualmente */
    min-width: 120px;             /* Largura mínima para os botões */
    font-size: 14px;              /* Tamanho de fonte definido */
    text-transform: uppercase;    /* Transforma o texto em maiúsculas */
    letter-spacing: 1px;          /* Espaçamento entre letras */
}
.btn { ... }: Define o estilo base para todos os botões, garantindo consistência e interatividade.
```

22. Efeitos de Hover e Estados Desabilitados para Botões
```html
.btn:hover {
    transform: translateY(-2px);               /* Move o botão levemente para cima quando o mouse passa por cima */
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);        /* Adiciona uma sombra para dar a sensação de profundidade */
}

.btn:disabled {
    opacity: 0.6;       /* Torna o botão semi-transparente quando desabilitado */
    cursor: not-allowed; /* Altera o cursor para indicar que não pode ser clicado */
    transform: none;     /* Remove qualquer transformação */
    box-shadow: none;    /* Remove sombra */
}
.btn:hover { ... } e .btn:disabled { ... }: Estabelecem os comportamentos visuais ao interagir ou quando o botão está desativado.
```

23. Botões Específicos para Ações
Reinforce
```html
.reinforce {
    background-color: var(--player-color); /* Fundo verde (cor do jogador) */
    color: white;                         /* Texto branco */
}
Attack

.attack {
    background-color: var(--ia-color);    /* Fundo vermelho (cor da IA) */
    color: white;
}
Fortify
.fortify {
    background-color: #FF9800; /* Fundo laranja */
    color: white;
}
End Turn
.end-turn {
    background-color: #2196F3; /* Fundo azul */
    color: white;
}
Esses estilos definem as cores específicas para cada ação de botão, alinhando-as à paleta do jogo.
```

24. Estilização dos Dados de Dados (Dados/Dice)
```html
.dice {
    display: inline-block;       /* Exibe em linha */
    width: 20px;                 /* Largura fixa */
    height: 20px;                /* Altura fixa */
    background-color: white;     /* Fundo branco */
    color: black;                /* Texto preto */
    border-radius: 3px;          /* Bordas suavemente arredondadas */
    text-align: center;          /* Centraliza o texto */
    line-height: 20px;           /* Alinha verticalmente o número */
    font-weight: bold;           /* Número em negrito */
    margin: 0 2px;              /* Espaço horizontal entre dados */
    font-size: 12px;             /* Tamanho da fonte */
}

.player-dice {
    background-color: var(--player-color); /* Dados do jogador: fundo verde */
    color: white;                          /* Texto branco */
}

.ia-dice {
    background-color: var(--ia-color);     /* Dados da IA: fundo vermelho */
    color: white;
}
.dice e variantes: Estilizam pequenos blocos que representam dados ou contadores, diferenciando jogadores e IA.
```

25. Estilos Responsivos (@media para telas menores)
```html
@media (max-width: 768px) {
    .game-stats {
        flex-direction: column;  /* Alinha as estatísticas em coluna */
        gap: 10px;               /* Espaço entre os elementos */
    }
    
    .stat-box, .turn-info {
        width: 100%;             /* Faz com que os elementos ocupem toda a largura em telas pequenas */
    }
    
    .action-buttons {
        flex-direction: column;  /* Organiza os botões em coluna */
    }
    
    .territory {
        width: 60px;             /* Reduz o tamanho dos territórios */
        height: 60px;
    }
    
    .territory .name {
        font-size: 10px;         /* Reduz o tamanho da fonte do nome */
    }
    
    .territory .armies {
        font-size: 14px;         /* Reduz o tamanho da fonte dos exércitos */
    }
}
@media (max-width: 768px) { ... }: Aplica ajustes específicos para dispositivos com largura de até 768px, melhorando a responsividade.
```

26. (Opcional) Reestilização Adicional dos Botões
Caso haja duplicação ou uma segunda abordagem para os botões:
```html
.btn {
    padding: 10px 20px;                      /* Ajuste no espaçamento interno */
    border: none;                           /* Remove bordas */
    border-radius: 5px;                     /* Arredonda os cantos */
    cursor: pointer;                        /* Indica interatividade */
    font-size: 1em;                         /* Tamanho da fonte relativo */
    transition: background-color 0.3s ease; /* Transição suave para mudanças de cor */
    color: white; 
    margin: 5px;                            /* Espaço externo entre os botões */
}

.btn.reinforce {
    background-color: #4CAF50;  /* Fundo verde para reforço (pode ser redundante se já definido) */
}

.btn.reinforce:hover {
    background-color: #45a049;  /* Tom de verde mais escuro no hover */
}

.btn.attack {
    background-color: #f44336;  /* Fundo vermelho para ataque */
}

.btn.attack:hover {
    background-color: #da190b;  /* Vermelho escuro no hover */
}

.btn.fortify {
    background-color: #2196F3;  /* Fundo azul para fortificação */
}

.btn.fortify:hover {
    background-color: #0b7dda;  /* Azul escuro no hover */
}

.btn.end-turn {
    background-color: #555555;  /* Fundo cinza para terminar o turno */
}

.btn.end-turn:hover {
    background-color: #333333;  /* Cinza mais escuro no hover */
}

.btn.rules {
    background-color: #ff9800;  /* Fundo laranja para o botão de regras */
}

.btn.rules:hover {
    background-color: #e68a00;  /* Tom laranja mais escuro no hover */
}
Essa parte reestiliza os botões com ajustes finos e transições para hover. Pode ser usada alternativamente às definições anteriores, dependendo de como você deseja os botões visualmente.
```

27. Estilização da Modal (Janela de Regras)
Modal (Fundo da Modal)
```html
.modal {
    display: none;                     /* Inicialmente oculta */
    position: fixed;                   /* Fixa a modal em relação à janela */
    z-index: 100;                      /* Alta prioridade para sobrepor outros elementos */
    left: 0;
    top: 0;
    width: 100%;                       /* Ocupa toda a largura da tela */
    height: 100%;                      /* Ocupa toda a altura da tela */
    overflow: auto;                    /* Permite rolagem se necessário */
    background-color: rgba(0,0,0,0.7);   /* Fundo semi-transparente, escurecendo o fundo */
    justify-content: center;           /* Centraliza horizontalmente */
    align-items: center;               /* Centraliza verticalmente */
}
.modal { ... }: Cria uma camada de fundo para a modal, ocultando-a por padrão.
```
Conteúdo da Modal
```html
.modal-content {
    background-color: rgba(100, 100, 100, 0.5);  /* Fundo semi-transparente */
    backdrop-filter: blur(15px);                /* Aplica desfoque ao fundo da modal */
    margin: auto;                               /* Centraliza automaticamente */
    padding: 20px;                              /* Espaçamento interno */
    border: 1px solid #888;                     /* Borda cinza clara */
    width: 80%;                                 /* Largura relativa */
    max-width: 900px;                           /* Largura máxima */
    border-radius: 8px;                         /* Cantos arredondados */
    position: relative;                         /* Necessário para posicionar elementos internos */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); /* Sombra para destaque */
    text-align: center;                         /* Centraliza o conteúdo */
}
.modal-content { ... }: Define a aparência da caixa que contém as regras do jogo.
```
Botão de Fechar da Modal
```html
.close-button {
    color: #aaa;              /* Cor suave para o botão */
    float: right;             /* Posicionado à direita */
    font-size: 28px;          /* Tamanho da fonte grande para destacar */
    font-weight: bold;        /* Negrito */
    cursor: pointer;          /* Indica que é clicável */
}

.close-button:hover,
.close-button:focus {
    color: black;             /* Fica preto quando o mouse passa ou focado */
    text-decoration: none;    /* Remove sublinhado */
    cursor: pointer;
}
.close-button { ... }: Estiliza o "X" de fechar a modal, incluindo seus estados de hover e foco.
```

Imagem das Regras
```html
#rules-image {
    max-width: 100%;    /* Limita a imagem à largura do container */
    height: auto;       /* Ajusta a altura proporcionalmente */
    display: block;     /* Trata a imagem como bloco para centralização */
    margin: 0 auto;     /* Centraliza a imagem horizontalmente */
}
#rules-image { ... }: Garante que a imagem das regras se ajuste corretamente dentro da modal.
```











