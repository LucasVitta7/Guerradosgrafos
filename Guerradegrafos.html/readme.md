# Guerra de Grafos

Guerra de Grafos é um jogo de estratégia simples baseado em turnos, inspirado no Risk, jogado em um grafo de territórios. O jogador compete contra uma IA para conquistar todos os territórios no mapa.

## Como Jogar

1.  **Abrir o Jogo**:
    *   Baixe ou clone este repositório.
    *   Navegue até a pasta `GraphWarGame`.
    *   Abra o arquivo `index.html` em um navegador moderno (ex: Chrome, Firefox, Edge).

2.  **Objetivo do Jogo**:
    *   Conquistar todos os territórios no mapa, eliminando os exércitos da IA e capturando seus territórios. A IA tem o mesmo objetivo.

3.  **Iniciando o Jogo**:
    *   O jogo começa com o jogador e a IA controlando, cada um, um território com 5 exércitos. Os territórios restantes são neutros, com 1 exército.

4.  **Turno do Jogador**:
    O turno do jogador consiste em três fases:

    *   **Fase de Reforço**:
        *   Você recebe um número de exércitos de reforço com base no número de territórios que controla (mínimo de 3).
        *   Clique em um dos seus territórios para selecioná-lo.
        *   Clique no botão "Reforçar" para posicionar um exército no território selecionado.
        *   Repita até que todos os reforços sejam posicionados.
        *   O jogo avança automaticamente para a fase de Ataque assim que todos os reforços forem usados. Você também pode clicar em "Atacar" para ir para a fase de ataque mais cedo (os reforços restantes serão perdidos).

    *   **Fase de Ataque**:
        *   Para atacar, primeiro clique em um dos seus territórios que tenha mais de 1 exército (este é o território atacante).
        *   Em seguida, clique em um território inimigo adjacente (IA ou neutro) para iniciar um ataque.
        *   **Atacando Territórios Neutros**: Você conquista automaticamente territórios neutros, movendo uma parte dos seus exércitos do território atacante.
        *   **Atacando Territórios da IA**:
            *   Uma batalha ocorre, decidida por rolagem de dados.
            *   O atacante rola até 3 dados (deve deixar 1 exército para trás).
            *   O defensor rola até 2 dados.
            *   Os dados mais altos são comparados. O atacante vence se o seu dado for estritamente maior.
            *   Exércitos são perdidos com base nos resultados da rolagem de dados.
            *   Se o defensor perder todos os exércitos, o atacante captura o território e move um número de exércitos.
        *   Você pode atacar várias vezes de diferentes territórios.
        *   Clique no botão "Fortificar" para ir para a fase de Fortificação.

    *   **Fase de Fortificação**:
        *   Você pode mover exércitos de um dos seus territórios para um território aliado adjacente.
        *   Clique em um território com mais de 1 exército (origem).
        *   Clique em um território aliado adjacente (destino).
        *   Você será solicitado a informar o número de exércitos a mover (garantindo que pelo menos 1 permaneça).
        *   Você só pode realizar um movimento de fortificação por turno por padrão (a lógica pode ser ajustada).

5.  **Terminando Seu Turno**:
    *   Clique no botão "Terminar Turno" para finalizar seu turno.

6.  **Turno da IA**:
    *   A IA realizará suas fases de reforço, ataque e fortificação. Suas ações serão registradas no log de batalha.

7.  **Vencendo/Perdendo**:
    *   O jogo termina quando um jogador (você ou a IA) controla todos os territórios no mapa.

## Estrutura do Projeto