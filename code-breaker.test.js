const { verifyNumber } = require('./helpers/utils-code-breaker');

test('Ninguno coincide', () => {
    var result = verifyNumber('0000')    
    expect(result).toBe('');
});

test('Todos coinciden', () => {
    var result = verifyNumber('1234')    
    expect(result).toBe('XXXX');
});

test('Uno coincide en posición', () => {
    var result = verifyNumber('1657')    
    expect(result).toBe('X');
});

test('Dos coinciden en posición', () => {
    var result = verifyNumber('1257')    
    expect(result).toBe('XX');
});

test('Tres coinciden en posición', () => {
    var result = verifyNumber('1237')    
    expect(result).toBe('XXX');
});

test('Uno coincide solo en valor', () => {
    var result = verifyNumber('6781')    
    expect(result).toBe('-');
});

test('Dos coinciden solo en valor', () => {
    var result = verifyNumber('2781')    
    expect(result).toBe('--');
});

test('Tres coinciden solo en valor', () => {
    var result = verifyNumber('2481')    
    expect(result).toBe('---');
});

test('Todos coinciden solo en valor', () => {
    var result = verifyNumber('2413')    
    expect(result).toBe('----');
});


