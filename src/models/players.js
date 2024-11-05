import rollDice from "../services/dice.js";

const players = [
    {
        NAME: "Mario",
        SPEED: 4,
        HANDLING: 3,
        POWER: 3,
    },
    
    {
        NAME: "Peach",
        SPEED: 3,
        HANDLING: 4,
        POWER: 2,
    },

    {
        NAME: "Yoshi",
        SPEED: 2,
        HANDLING: 4,
        POWER: 3,
    },

    {
        NAME: "Bowser",
        SPEED: 5,
        HANDLING: 2,
        POWER: 5,
    },
  
    {
        NAME: "Luigi",
        SPEED: 3,
        HANDLING: 4,
        POWER: 4,
    },

    {
        NAME: "Donkey Kong",
        SPEED: 2,
        HANDLING: 2,
        POWER: 5,
    },
];

const selectTwoPlayers = async () => {

    //escolhendo personagem player 1
    console.log('Escolhendo aleatoriamente personagem para player 1');

    //gira o dado para escolher personagem aleatorio
    let numb1 = await rollDice() - 1;

    //atribui o personagem ao player
    let player1 = {
        INFO: players[numb1],
        POINTS: 0,
        CURRENT_DICE_RESULT: 0,
    };
    console.log(`Player 1: ${player1.INFO.NAME}`);

    //escolhendo personagem player 2
    console.log('Escolhendo aleatoriamente personagem para player 2');

    //gira o dado enquanto os numb forem iguais para não escolher o mesmo personagem
    let numb2;
    do{
        numb2 = await rollDice() - 1;
    } while(numb1 === numb2);

    //atribui o personagem ao player
    let player2 = {
        INFO: players[numb2],
        POINTS: 0,
        CURRENT_DICE_RESULT: 0,
    };
    console.log(`Player 2: ${player2.INFO.NAME}`);

    return [player1, player2];
}

export default selectTwoPlayers;