// Confirma que este é o arquivo principal do Legacy Kick

console.log('--- Legacy Kick: Aplicativo Principal ---');



import { Application, Graphics, Text, TextStyle, Container } from 'pixi.js';



// 1. Define as dimensões do nosso "campo" de renderização.

const APP_WIDTH = 960;

const APP_HEIGHT = 540;



// Variáveis globais para armazenar os dilemas e o estado atual do jogo

var app;

var allDilemas = [];

var currentDilemaIndex = 0;



// Elementos da UI para dilemas

var dilemmaText;

var optionButtons = [];

var feedbackText;

var historicalFactText;

var nextDilemaButton;



// Container para os elementos da UI do dilema (para facilitar a remoção)

var dilemmaUIContainer;

var feedbackUIContainer;



// Elementos para a tela de início

var startMessageText;

var startBall; // A bola que será clicável para iniciar

var ballPulseScale = 1.0; // Escala inicial para o efeito de pulsar da bola

var ballPulseDirection = 1; // 1 para aumentar, -1 para diminuir



// Função para criar uma aplicação PixiJS

async function createPixiApp() {

    app = new Application();

    await app.init({

        width: APP_WIDTH,

        height: APP_HEIGHT,

        backgroundColor: 0x1A9B00, // Verde do gramado

        antialias: true,

        resolution: window.devicePixelRatio || 1, // Ensure high resolution

        autoDensity: true

    });



    document.body.appendChild(app.canvas);



    // Centralizar o canvas e adicionar borda

    app.canvas.style.position = 'absolute';

    app.canvas.style.left = '50%';

    app.canvas.style.top = '50%';

    app.canvas.style.transform = 'translate(-50%, -50%)';

    app.canvas.style.border = '2px solid #333';

}



// Função para desenhar o campo de futebol

function drawSoccerField() {

    const lineColor = 0xFFFFFF; // Linhas brancas

    const lineThickness = 3;

    const centerX = APP_WIDTH / 2;

    const centerY = APP_HEIGHT / 2;



    // Contorno externo

    const fieldOuterBounds = new Graphics();

    fieldOuterBounds.setStrokeStyle(lineThickness, lineColor);

    fieldOuterBounds.rect(0, 0, APP_WIDTH, APP_HEIGHT);

    fieldOuterBounds.stroke();

    app.stage.addChild(fieldOuterBounds);



    // Linha do meio

    const fieldCenterLine = new Graphics();

    fieldCenterLine.setStrokeStyle(lineThickness, lineColor);

    fieldCenterLine.moveTo(centerX, 0);

    fieldCenterLine.lineTo(centerX, APP_HEIGHT);

    fieldCenterLine.stroke();

    app.stage.addChild(fieldCenterLine);



    // Círculo central

    const fieldCenterCircle = new Graphics();

    fieldCenterCircle.setStrokeStyle(lineThickness, lineColor);

    fieldCenterCircle.circle(centerX, centerY, 70);

    fieldCenterCircle.stroke();

    app.stage.addChild(fieldCenterCircle);



    // Grandes áreas

    const penaltyAreaWidth = 140;

    const penaltyAreaHeight = 320;



    const fieldPenaltyAreaLeft = new Graphics();

    fieldPenaltyAreaLeft.setStrokeStyle(lineThickness, lineColor);

    fieldPenaltyAreaLeft.rect(0, centerY - penaltyAreaHeight / 2, penaltyAreaWidth, penaltyAreaHeight);

    fieldPenaltyAreaLeft.stroke();

    app.stage.addChild(fieldPenaltyAreaLeft);



    const fieldPenaltyAreaRight = new Graphics();

    fieldPenaltyAreaRight.setStrokeStyle(lineThickness, lineColor);

    fieldPenaltyAreaRight.rect(APP_WIDTH - penaltyAreaWidth, centerY - penaltyAreaHeight / 2, penaltyAreaWidth, penaltyAreaHeight);

    fieldPenaltyAreaRight.stroke();

    app.stage.addChild(fieldPenaltyAreaRight);



    // Pequenas áreas

    const goalAreaWidth = 40;

    const goalAreaHeight = 150;



    const fieldGoalAreaLeft = new Graphics();

    fieldGoalAreaLeft.setStrokeStyle(lineThickness, lineColor);

    fieldGoalAreaLeft.rect(0, centerY - goalAreaHeight / 2, goalAreaWidth, goalAreaHeight);

    fieldGoalAreaLeft.stroke();

    app.stage.addChild(fieldGoalAreaLeft);



    const fieldGoalAreaRight = new Graphics();

    fieldGoalAreaRight.setStrokeStyle(lineThickness, lineColor);

    fieldGoalAreaRight.rect(APP_WIDTH - goalAreaWidth, centerY - goalAreaHeight / 2, goalAreaWidth, goalAreaHeight);

    fieldGoalAreaRight.stroke();

    app.stage.addChild(fieldGoalAreaRight);



    // Marcas de pênalti

    const penaltyMarkLeft = new Graphics();

    penaltyMarkLeft.setStrokeStyle(lineThickness, lineColor);

    penaltyMarkLeft.circle(penaltyAreaWidth + 10, centerY, 3);

    penaltyMarkLeft.stroke();

    app.stage.addChild(penaltyMarkLeft);



    const penaltyMarkRight = new Graphics();

    penaltyMarkRight.setStrokeStyle(lineThickness, lineColor);

    penaltyMarkRight.circle(APP_WIDTH - penaltyAreaWidth - 10, centerY, 3);

    penaltyMarkRight.stroke();

    app.stage.addChild(penaltyMarkRight);



    // Bola principal do jogo (desenhada no campo, não é a bola de início)

    const ball = new Graphics()

        .circle(centerX, centerY, 10) // Desenha o círculo primeiro, nas coordenadas centrais

        .fill(0xFFFFFF) // Cor branca

        .stroke({ width: 1, color: 0x000000 }); // Contorno sutil para visibilidade



    app.stage.addChild(ball);

}



// Função para carregar os dados dos dilemas

async function loadDilemas() {

    try {

        const response = await fetch('/dilemas.json');

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);

        }

        allDilemas = await response.json();

        console.log('Dilemas carregados com sucesso:', allDilemas);

    } catch (error) {

        console.error('Erro ao carregar dilemas:', error);

        const errorStyle = new TextStyle({

            fontFamily: 'Verdana, sans-serif',

            fontSize: 24,

            fill: 0xFF0000,

            wordWrap: true,

            wordWrapWidth: APP_WIDTH - 40,

            stroke: { color: 0x000000, width: 2 }

        });

        const errorMessage = new Text({ text: 'Erro ao carregar dilemas. Verifique o console para mais detalhes.', style: errorStyle });

        errorMessage.x = APP_WIDTH / 2 - errorMessage.width / 2;

        errorMessage.y = APP_HEIGHT / 2 - errorMessage.height / 2;

        app.stage.addChild(errorMessage);

    }

}



// Função para exibir um dilema específico

function displayDilema() {

    const dilema = allDilemas[currentDilemaIndex];

    console.log('Dilema recuperado em displayDilema:', dilema);



    if (!dilema) {

        console.error('Erro: Dilema não definido (ou índice inválido) ao tentar exibir. Saindo de displayDilema.');

        const errorStyle = new TextStyle({

            fontFamily: 'Verdana, sans-serif',

            fontSize: 24,

            fill: 0xFF0000,

            wordWrap: true,

            wordWrapWidth: APP_WIDTH - 40,

            stroke: { color: 0x000000, width: 2 }

        });

        const errorMessage = new Text({ text: 'Erro ao exibir dilema. Tente reiniciar o jogo.', style: errorStyle });

        errorMessage.x = APP_WIDTH / 2 - errorMessage.width / 2;

        errorMessage.y = APP_HEIGHT / 2 - errorMessage.height / 2;

        app.stage.addChild(errorMessage);

        return;

    }



    if (dilemmaUIContainer) {

        app.stage.removeChild(dilemmaUIContainer);

        dilemmaUIContainer.destroy({ children: true });

    }

    if (feedbackUIContainer) {

        app.stage.removeChild(feedbackUIContainer);

        feedbackUIContainer.destroy({ children: true });

    }



    dilemmaUIContainer = new Container();

    dilemmaUIContainer.x = APP_WIDTH / 2;

    dilemmaUIContainer.y = APP_HEIGHT * 0.1;



    // Estilo para o texto do dilema (pergunta)

    const dilemmaTextStyle = new TextStyle({

        fontFamily: 'Verdana, sans-serif',

        fontSize: 22,

        fill: 0xFFFFFF,

        align: 'center',

        wordWrap: true,

        wordWrapWidth: APP_WIDTH * 0.75 // Ajustado para 75% da largura do app para melhor quebra

    });



    dilemmaText = new Text({ text: dilema.situation, style: dilemmaTextStyle });

    dilemmaText.anchor.set(0.5);

    dilemmaText.x = 0; // Centralizado no container

    dilemmaText.y = 40; // Espaçamento do topo do painel

    dilemmaUIContainer.addChild(dilemmaText);



    // Fundo semi-transparente para o painel do dilema

    const panelBackground = new Graphics();

    panelBackground.fill({ color: 0x000000, alpha: 0.7 });



    const panelPaddingX = 40;

    const panelPaddingY = 30;

    // O width do panel deve ser o maior entre o texto do dilema e a largura máxima dos botões

    let maxContentWidth = dilemmaText.width;

    const buttonWidth = 350; // Largura fixa do botão

    if (buttonWidth > maxContentWidth) {

        maxContentWidth = buttonWidth;

    }

    const calculatedPanelWidth = Math.min(APP_WIDTH * 0.9, maxContentWidth + panelPaddingX * 2);



    let currentYOffset = dilemmaText.y + dilemmaText.height / 2 + panelPaddingY; // Posição para o primeiro botão



    dilema.options.forEach((option, index) => {

        const buttonContainer = new Container();

        const buttonBackground = new Graphics();

        buttonBackground.fill(0x90EE90);

        buttonBackground.stroke({ width: 2, color: 0x696969 });

        buttonBackground.roundRect(0, 0, buttonWidth, 60, 10);

        buttonBackground.stroke();

        buttonContainer.addChild(buttonBackground);



        const shadow = new Graphics();

        shadow.fill({ color: 0x000000, alpha: 0.3 });

        shadow.roundRect(5, 5, buttonWidth, 60, 10);

        buttonContainer.addChildAt(shadow, 0);



        const buttonTextStyle = new TextStyle({

            fontFamily: 'Verdana, sans-serif',

            fontSize: 18,

            fill: 0x000000,

            align: 'center',

            wordWrap: true,

            wordWrapWidth: buttonWidth - 20 // Padding para o texto dentro do botão

        });



        const buttonText = new Text({ text: option.text, style: buttonTextStyle });

        buttonText.anchor.set(0.5);

        buttonText.x = buttonBackground.width / 2;

        buttonText.y = buttonBackground.height / 2 - (option.effect ? 10 : 0);

        buttonContainer.addChild(buttonText);



        let effectTextHeight = 0;

        if (option.effect) {

            const effectTextStyle = new TextStyle({

                fontFamily: 'Verdana, sans-serif',

                fontSize: 14,

                fill: 0x4B0082,

                align: 'center',

                wordWrap: true,

                wordWrapWidth: buttonWidth - 20

            });

            const effectText = new Text({ text: option.effect, style: effectTextStyle });

            effectText.anchor.set(0.5);

            effectText.x = buttonBackground.width / 2;

            effectText.y = buttonBackground.height + 15; // Posiciona abaixo do botão

            buttonContainer.addChild(effectText);

            effectTextHeight = effectText.height;

        }



        const verticalSpacingBetweenButtons = 20; // Espaçamento entre os botões

        const contentHeightWithinButton = buttonBackground.height + effectTextHeight + 5; // Altura do botão + texto do efeito + um pequeno padding



        buttonContainer.x = -buttonContainer.width / 2;

        buttonContainer.y = currentYOffset + verticalSpacingBetweenButtons; // Posiciona o botão atual

        currentYOffset += contentHeightWithinButton + verticalSpacingBetweenButtons; // Atualiza para o próximo botão



        buttonContainer.eventMode = 'static';

        buttonContainer.cursor = 'pointer';



        buttonContainer.on('pointerover', () => {

            buttonBackground.tint = 0xDDA0DD;

            shadow.tint = 0xAAAAAA;

        });

        buttonContainer.on('pointerout', () => {

            buttonBackground.tint = 0xFFFFFF;

            shadow.tint = 0xFFFFFF;

        });



        buttonContainer.on('pointerdown', () => handleOptionClick(option));



        dilemmaUIContainer.addChild(buttonContainer);

        optionButtons.push(buttonContainer);

    });



    // Ajustar a altura final do panelBackground para incluir todo o conteúdo

    const finalPanelHeight = currentYOffset + panelPaddingY; // Último Y offset + padding final



    panelBackground.roundRect(

        -calculatedPanelWidth / 2,

        dilemmaText.y - dilemmaText.height / 2 - panelPaddingY,

        calculatedPanelWidth,

        finalPanelHeight - (dilemmaText.y - dilemmaText.height / 2 - panelPaddingY), // Altura total do conteúdo

        20

    );

    // Garante que o texto fique por cima do fundo do painel

    dilemmaUIContainer.setChildIndex(dilemmaText, dilemmaUIContainer.children.length - 1);





    app.stage.addChild(dilemmaUIContainer);

}



// Função para lidar com o clique em uma opção

function handleOptionClick(selectedOption) {

    const dilema = allDilemas[currentDilemaIndex];

    console.log('Opção selecionada:', selectedOption.text);

    console.log('Dilema atual no clique:', dilema);



    if (!dilema) {

        console.error('Erro: Dilema não definido (ou índice inválido) ao lidar com a opção. Saindo de handleOptionClick.');

        return;

    }



    optionButtons.forEach(button => button.eventMode = 'none');

    if (dilemmaUIContainer) {

        app.stage.removeChild(dilemmaUIContainer);

        dilemmaUIContainer.destroy({ children: true });

    }



    feedbackUIContainer = new Container();

    feedbackUIContainer.x = APP_WIDTH / 2;

    feedbackUIContainer.y = APP_HEIGHT * 0.15;



    const feedbackPanelBackground = new Graphics();

    feedbackPanelBackground.fill({ color: 0x000000, alpha: 0.7 });

    feedbackUIContainer.addChild(feedbackPanelBackground);



    const feedbackTextStyle = new TextStyle({

        fontFamily: 'Verdana, sans-serif',

        fontSize: 20,

        fill: 0xFFFFFF,

        align: 'center',

        wordWrap: true,

        wordWrapWidth: APP_WIDTH * 0.8 // Ajustado

    });



    feedbackText = new Text({ text: dilema.feedback, style: feedbackTextStyle });

    feedbackText.anchor.set(0.5);

    feedbackText.x = 0;

    feedbackText.y = 40;

    feedbackUIContainer.addChild(feedbackText);



    const historicalFactTextStyle = new TextStyle({

        fontFamily: 'Verdana, sans-serif',

        fontSize: 17,

        fill: 0xFFD700,

        align: 'center',

        wordWrap: true,

        wordWrapWidth: APP_WIDTH * 0.8 // Ajustado

    });



    historicalFactText = new Text({ text: `Fato Histórico: ${dilema.historicalFact}`, style: historicalFactTextStyle });

    historicalFactText.anchor.set(0.5);

    historicalFactText.x = 0;

    historicalFactText.y = feedbackText.y + feedbackText.height + 30;

    feedbackUIContainer.addChild(historicalFactText);



    const feedbackPanelPaddingX = 40;

    const feedbackPanelPaddingY = 30;

    const maxTextWidthFeedback = Math.max(feedbackText.width, historicalFactText.width);

    const calculatedFeedbackPanelWidth = Math.min(APP_WIDTH * 0.9, maxTextWidthFeedback + feedbackPanelPaddingX * 2);

    let currentFeedbackYOffset = historicalFactText.y + historicalFactText.height + feedbackPanelPaddingY;



    feedbackPanelBackground.clear();

    feedbackPanelBackground.fill({ color: 0x000000, alpha: 0.7 });

    feedbackPanelBackground.roundRect(

        -calculatedFeedbackPanelWidth / 2,

        feedbackText.y - feedbackText.height / 2 - feedbackPanelPaddingY,

        calculatedFeedbackPanelWidth,

        currentFeedbackYOffset - (feedbackText.y - feedbackText.height / 2 - feedbackPanelPaddingY),

        20

    );

    feedbackUIContainer.setChildIndex(feedbackText, feedbackUIContainer.children.length - 1);

    feedbackUIContainer.setChildIndex(historicalFactText, feedbackUIContainer.children.length - 1);





    nextDilemaButton = new Graphics();

    nextDilemaButton.fill(0x4682B4);

    nextDilemaButton.stroke({ width: 2, color: 0x666666 });

    nextDilemaButton.roundRect(0, 0, 200, 50, 10);

    nextDilemaButton.stroke();



    const nextButtonShadow = new Graphics();

    nextButtonShadow.fill({ color: 0x000000, alpha: 0.3 });

    nextButtonShadow.roundRect(5, 5, 200, 50, 10);

    nextDilemaButton.addChildAt(nextButtonShadow, 0);



    nextDilemaButton.x = -nextDilemaButton.width / 2;

    nextDilemaButton.y = currentFeedbackYOffset + 20; // Posiciona abaixo do conteúdo do feedback

    currentFeedbackYOffset += nextDilemaButton.height + 20; // Atualiza o Y offset



    const nextButtonText = new Text({ text: 'Próximo Dilema', style: {

        fontFamily: 'Verdana, sans-serif',

        fontSize: 20,

        fill: 0xFFFFFF,

        align: 'center'

    }});

    nextButtonText.anchor.set(0.5);

    nextButtonText.x = nextDilemaButton.width / 2;

    nextButtonText.y = nextDilemaButton.height / 2;

    nextDilemaButton.addChild(nextButtonText);



    nextDilemaButton.eventMode = 'static';

    nextDilemaButton.cursor = 'pointer';

    nextDilemaButton.on('pointerover', () => {

        nextDilemaButton.tint = 0xADD8E6;

        nextButtonShadow.tint = 0xAAAAAA;

    });

    nextDilemaButton.on('pointerout', () => {

        nextDilemaButton.tint = 0xFFFFFF;

        nextButtonShadow.tint = 0xFFFFFF;

    });

    nextDilemaButton.on('pointerdown', loadNextDilema);



    feedbackUIContainer.addChild(nextDilemaButton);

    app.stage.addChild(feedbackUIContainer);

}



// Função para carregar o próximo dilema

function loadNextDilema() {

    currentDilemaIndex++;

    if (currentDilemaIndex < allDilemas.length) {

        displayDilema();

    } else {

        console.log('Fim de todos os dilemas!');

        if (feedbackUIContainer) {

            app.stage.removeChild(feedbackUIContainer);

            feedbackUIContainer.destroy({ children: true });

        }

        const endTextStyle = new TextStyle({

            fontFamily: 'Verdana, sans-serif',

            fontSize: 30,

            fill: 0xFFFFFF,

            align: 'center',

            wordWrap: true,

            wordWrapWidth: APP_WIDTH * 0.8,

            stroke: { color: 0x000000, width: 3 }

        });

        const endMessage = new Text({ text: 'Fim da jornada! Obrigado por jogar Legacy Kick!', style: endTextStyle });

        endMessage.anchor.set(0.5);

        endMessage.x = APP_WIDTH / 2;

        endMessage.y = APP_HEIGHT / 2;

        app.stage.addChild(endMessage);



        const restartButton = new Graphics();

        restartButton.fill(0x2E8B57);

        restartButton.stroke({ width: 2, color: 0x666666 });

        restartButton.roundRect(0, 0, 250, 60, 10);

        restartButton.stroke();



        const restartButtonShadow = new Graphics();

        restartButtonShadow.fill({ color: 0x000000, alpha: 0.3 });

        restartButtonShadow.roundRect(5, 5, 250, 60, 10);

        restartButton.addChildAt(restartButtonShadow, 0);



        restartButton.x = APP_WIDTH / 2 - restartButton.width / 2;

        restartButton.y = APP_HEIGHT / 2 + 100;



        const restartButtonText = new Text({ text: 'Reiniciar Jogo', style: {

            fontFamily: 'Verdana, sans-serif',

            fontSize: 24,

            fill: 0xFFFFFF,

            align: 'center'

        }});

        restartButtonText.anchor.set(0.5);

        restartButtonText.x = restartButton.width / 2;

        restartButtonText.y = restartButton.height / 2;

        restartButton.addChild(restartButtonText);



        restartButton.eventMode = 'static';

        restartButton.cursor = 'pointer';

        restartButton.on('pointerover', () => {

            restartButton.tint = 0x90EE90;

            restartButtonShadow.tint = 0xAAAAAA;

        });

        restartButton.on('pointerout', () => {

            restartButton.tint = 0xFFFFFF;

            restartButtonShadow.tint = 0xFFFFFF;

        });

        restartButton.on('pointerdown', () => {

            currentDilemaIndex = 0;

            app.stage.removeChild(endMessage);

            app.stage.removeChild(restartButton);

            displayDilema();

        });

        app.stage.addChild(restartButton);

    }

}



// Função para exibir a tela de início

function displayStartScreen() {

    if (dilemmaUIContainer) {

        app.stage.removeChild(dilemmaUIContainer);

        dilemmaUIContainer.destroy({ children: true });

    }

    if (feedbackUIContainer) {

        app.stage.removeChild(feedbackUIContainer);

        feedbackUIContainer.destroy({ children: true });

    }



    const startMessageStyle = new TextStyle({

        fontFamily: 'Verdana, sans-serif',

        fontSize: 30,

        fill: 0xFFFFFF,

        align: 'center',

        wordWrap: true,

        wordWrapWidth: APP_WIDTH * 0.8,

        stroke: { color: 0x000000, width: 3 }

    });

    startMessageText = new Text({ text: 'Toque na bola para iniciar o Legacy Kick!', style: startMessageStyle });

    startMessageText.anchor.set(0.5);

    startMessageText.x = APP_WIDTH / 2;

    startMessageText.y = APP_HEIGHT * 0.2;



    app.stage.addChild(startMessageText);



    startBall = new Graphics()

        .circle(0, 0, 30)

        .fill({ color: 0xFFD700 })

        .stroke({ width: 4, color: 0x000000 });



    startBall.x = APP_WIDTH / 2;

    startBall.y = APP_HEIGHT / 2;

    startBall.eventMode = 'static';

    startBall.cursor = 'pointer';

    startBall.on('pointerdown', handleStartGame);



    app.stage.addChild(startBall);



    // Inicia o loop de animação da bola

    app.ticker.add(gameLoop);

}



// Loop de jogo para animação

function gameLoop(ticker) {

    if (startBall && app.stage.children.includes(startBall)) {

        // Efeito de pulsar na bola

        ballPulseScale += ballPulseDirection * 0.001 * ticker.deltaTime; // Ajusta a velocidade do pulsar

        if (ballPulseScale >= 1.05) { // Aumenta até 1.05

            ballPulseScale = 1.05;

            ballPulseDirection = -1;

        } else if (ballPulseScale <= 0.95) { // Diminui até 0.95

            ballPulseScale = 0.95;

            ballPulseDirection = 1;

        }

        startBall.scale.set(ballPulseScale);

    }

}





// Função para iniciar o jogo após o clique na bola

function handleStartGame() {

    console.log('Iniciando o jogo!');



    if (startMessageText) {

        app.stage.removeChild(startMessageText);

        startMessageText.destroy();

    }

    if (startBall) {

        app.stage.removeChild(startBall);

        startBall.destroy();

    }

    // Para o loop de animação da bola de início uma vez que o jogo começou

    app.ticker.remove(gameLoop);





    if (allDilemas.length > 0) {

        displayDilema();

    } else {

        console.error("Nenhum dilema carregado para exibir após iniciar.");

    }

}





// Função principal de inicialização do jogo

async function initGame() {

    console.log('Legacy Kick: Iniciando a aplicação PixiJS e carregando recursos...');

    await createPixiApp();

    drawSoccerField();

    await loadDilemas();



    displayStartScreen();



    console.log('Legacy Kick: Aplicativo PixiJS iniciado e pronto com a v8!');

}



// Chama a função para iniciar o jogo.

initGame();