const logRollResult =  async(player, block) => {
    let attribute;
    let match;
    switch(block){
        case 'straight':
            attribute = player.INFO.SPEED;
            match = 'velocidade';
            break;
        case 'curve':
            attribute = player.INFO.HANDLING;
            match = 'manobrabilidade';
            break;
        default:
            attribute = player.INFO.POWER;
            match = 'poder';
    }
    console.log(
        `${player.INFO.NAME} 🎲 rolou um dado de ${match} ${player.CURRENT_DICE_RESULT} + ${attribute} = ${player.CURRENT_DICE_RESULT + attribute}`
    );
}

export default logRollResult;