const codeBreaker = require('./code-breaker');

test('Ninguno coincide', () => {
    var result = codeBreaker.verifyNumber('0000')    
    expect(result).toBe('');
});

test('Todos coinciden', () => {
    var result = codeBreaker.verifyNumber('1234')    
    expect(result).toBe('XXXX');
});

test('Uno coincide en posición', () => {
    var result = codeBreaker.verifyNumber('1657')    
    expect(result).toBe('X');
});

test('Dos coinciden en posición', () => {
    var result = codeBreaker.verifyNumber('1257')    
    expect(result).toBe('XX');
});

test('Tres coinciden en posición', () => {
    var result = codeBreaker.verifyNumber('1237')    
    expect(result).toBe('XXX');
});

test('Uno coincide solo en valor', () => {
    var result = codeBreaker.verifyNumber('6781')    
    expect(result).toBe('-');
});

test('Dos coinciden solo en valor', () => {
    var result = codeBreaker.verifyNumber('2781')    
    expect(result).toBe('--');
});

test('Tres coinciden solo en valor', () => {
    var result = codeBreaker.verifyNumber('2481')    
    expect(result).toBe('---');
});

test('Todos coinciden solo en valor', () => {
    var result = codeBreaker.verifyNumber('2413')    
    expect(result).toBe('----');
});


