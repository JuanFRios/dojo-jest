const { response, request } = require('express');

const { verifyNumber } = require('../helpers/utils-code-breaker');

const validateNumber = (req = request, res = response) => {

    const { number = '1234' } = req.query;

    const result = verifyNumber(number);

    res.status(200).json({
        number,
        result
    });
}

module.exports = {
    validateNumber
}