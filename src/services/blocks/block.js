const getRandomBlock = async() => {
    let random = Math.random();
    let result;

    switch(true){
        case random < 0.33:
            result = 'straight';
            break;
        case random < 0.66:
            result = 'curve';
            break;
        default:
            result = 'clash';
    }

    return result;
}

export default getRandomBlock;