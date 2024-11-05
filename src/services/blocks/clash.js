import rollDice from "../dice.js";
import logRollResult from "../log.js";

const clash = async(player1, player2) => {

    const total1 = player1.CURRENT_DICE_RESULT + player1.INFO.POWER;
    const total2 = player2.CURRENT_DICE_RESULT + player2.INFO.POWER;

    //sorteia casco ou bomba
    const weapon = await rollDice() % 2 == 0 ? 'shell' : 'bomb';

    //sorteia ganhador +1 ponto
    const plus1 = await rollDice() % 2 == 0 ? true : false;

    console.log(`${player1.INFO.NAME} confrontou com ${player2.INFO.NAME}! 🥊`);

    await logRollResult(
        player1,
        'clash',
    );

    await logRollResult(
        player2,
        'clash',
    );

    // verificando o vencedor
    if (total1 > total2) {
        console.log(`${player1.INFO.NAME} venceu o confronto lançando ${weapon}`);
        if(plus1){
            console.log(`${player1.INFO.NAME} ganhou turbo +1 ponto`);
            player1.POINTS++;
        }
        if(weapon === 'shell'){
            if(player2.POINTS > 0){
                console.log(`${player2.INFO.NAME} perdeu 1 ponto 🐢`)
                player2.POINTS--;
            } else {
                console.log(`${player2.INFO.NAME} com pontos zerados`);
            }
        }
        if(weapon === 'bomb'){
            if(player2.POINTS > 1){
                console.log(`${player2.INFO.NAME} perdeu 2 pontos 🐢`)
                player2.POINTS -= 2;
            } else {
                console.log(`${player2.INFO.NAME} com pontos zerados`);
                player2.POINTS = 0;
            }
        }
    } else if (total2 > total1) {
        console.log(`${player2.INFO.NAME} venceu o confronto lançando ${weapon}`);
        if(plus1){
            console.log(`${player2.INFO.NAME} ganhou turbo +1 ponto`);
            player1.POINTS++;
        }
        if(weapon === 'shell'){
            if(player1.POINTS > 0){
                console.log(`${player1.INFO.NAME} perdeu 1 ponto 🐢`)
                player1.POINTS--;
            } else {
                console.log(`${player1.INFO.NAME} com pontos zerados`);
            }
        }
        if(weapon === 'bomb'){
            if(player1.POINTS > 1){
                console.log(`${player1.INFO.NAME} perdeu 2 pontos 🐢`)
                player1.POINTS -= 2;
            } else {
                console.log(`${player1.INFO.NAME} com pontos zerados`);
                player1.POINTS = 0;
            }
        }
    } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
    }
}

export default clash;