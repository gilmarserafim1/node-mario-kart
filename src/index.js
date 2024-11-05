import selectPlayers from "./models/players.js";
import getRandomBlock from "./services/blocks/block.js";
import clash from "./services/blocks/clash.js";
import curve from "./services/blocks/curve.js";
import straight from "./services/blocks/straight.js";
import rollDice from "./services/dice.js";


async function playRaceEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {

        console.log(`🏁 Rodada ${round}`);
  
        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
  
        // rolar os dados
        player1.CURRENT_DICE_RESULT = await rollDice();
        player2.CURRENT_DICE_RESULT = await rollDice();

        switch(block){
            case 'straight':
                await straight(player1, player2);
                break;
            case 'curve':
                await curve(player1, player2);
                break;
            default:
                await clash(player1, player2);
        }
  
      console.log("-----------------------------");
    }
  }
  
  async function declareWinner(player1, player2) {
    console.log("Resultado final:");
    console.log(`${player1.INFO.NAME}: ${player1.POINTS} ponto(s)`);
    console.log(`${player2.INFO.NAME}: ${player2.POINTS} ponto(s)`);
  
    if (player1.POINTS > player2.POINTS)
      console.log(`\n${player1.INFO.NAME} venceu a corrida! Parabéns! 🏆`);
    else if (player2.POINTS > player1.POINTS)
      console.log(`\n${player2.INFO.NAME} venceu a corrida! Parabéns! 🏆`);
    else console.log("A corrida terminou em empate");
  }
  

async function main() {
    const [player1, player2] = await selectPlayers();

    console.log(
        `\n🏁🚨 Corrida entre ${player1.INFO.NAME} e ${player2.INFO.NAME} começando...\n`
      );
    
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);

}

main();



