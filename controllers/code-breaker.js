const { response, request } = require('express');

const { verifyNumber } = require('../helpers/utils-code-breaker');
const fs = require('fs');

const validateNumber = (req = request, res = response) => {

    const { number = '1234' } = req.query;

    const result = verifyNumber(number);

    res.status(200).json({
        number,
        result
    });
}


const restartGame = (req = request, res = response) => {

    const randomNumber = Math.floor(Math.random()*8999)+1000;
    const stringRandomNumber = randomNumber.toString();

    let secret = { secret: stringRandomNumber };

    let data = JSON.stringify(secret);
    fs.writeFileSync('secret.json', data);   

    res.status(200).json({
        ok: true, 
        stringRandomNumber
    });
}

module.exports = {
    validateNumber,
    restartGame
}