const fs = require('fs');

let rawdata = fs.readFileSync('secret.json');
let secretJSON = JSON.parse(rawdata);

// const SECRET = '1234';
const SECRET = secretJSON.secret;
var secretArray = SECRET.split('');

function verifyNumber(number) {
    var result
    var numberArray = number.split('');
    result = matchInPosition(numberArray)
    if(result === ''){
        result = matchInValue(numberArray);
    }
    return result
}

function matchInPosition(numberArray) {
    var coincidencia = ''
    secretArray.map((s, index) => {
        if(numberArray[index]=== s){
            coincidencia = coincidencia + 'X';
        }
    });
    return coincidencia
}

function matchInValue(numberArray){
    var coincidencia = '';
    secretArray.forEach((s)=> {
        var count = numberArray.filter(x => x == s).length;
        if(count>0){
            coincidencia = coincidencia + '-'
        }
    })
    return coincidencia
}

module.exports = {
    verifyNumber
}