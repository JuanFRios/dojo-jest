const { response } = require("express")

const validateNumberDigits = (req, res = response, next ) => {

    const { number = '1234' } = req.query;

    console.log(number.length)
    if(number.length !== 4) {
        return res.status(400).json({
            msg: 'El número debe ser de 4 dígitos'
        });
    }

    next();
}

module.exports = {
    validateNumberDigits
}