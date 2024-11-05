import logRollResult from "../log.js";

const straight = async (player1, player2) => {
    
    const total1 = player1.CURRENT_DICE_RESULT + player1.INFO.SPEED;
    const total2 = player2.CURRENT_DICE_RESULT + player2.INFO.SPEED;

    await logRollResult(
        player1,
        'straight',
    );

    await logRollResult(
        player2,
        'straight',
    );

    // verificando o vencedor
    if (total1 > total2) {
        console.log(`${player1.INFO.NAME} marcou um ponto!`);
        player1.POINTS++;
    } else if (total2 > total1) {
        console.log(`${player2.INFO.NAME} marcou um ponto!`);
        player2.POINTS++;
    } else {
        console.log('Empate! Ningém marcou ponto');
    }

}

export default straight;