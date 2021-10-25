import Password from '../password.js'
function test(description, fn) {
    console.log(description)
    fn()
}

function expect(received) {

    function toBe(actual) {
        if (received === actual) {
            console.log('passed')
        }
        else {
            console.log('Fail')
            console.log(`warining: minimum ${received} required`)
        }
    }
    return { toBe }
}

test('should fail 1', () => {
    const pass = 'abcd'
    expect(Password(pass)).toBe('valid')
})
test('should fail 2', () => {
    const pass = 'abcd1234'
    expect(Password(pass)).toBe('valid')
})
test('should fail 3', () => {
    const pass = 'ABCabcd'
    expect(Password(pass)).toBe('valid')
})
test('should fail 4', () => {
    const pass = 'ABCd1234'
    expect(Password(pass)).toBe('valid')
})
test('should fail 5', () => {
    const pass = "abcd1234Ab";
    expect(Password(pass)).toBe('valid')
})
test('should Pass 6', () => {
    const pass = "Abcd#1234@";
    expect(Password(pass)).toBe('valid')
})
test('should Pass 7', () => {
    const pass = "AbCd@#AB";
    expect(Password(pass)).toBe('valid')
})
test('should Pass 8', () => {
    const pass = "aAbBCc!@#$#@AB";
    expect(Password(pass)).toBe('valid')
})
test('should Pass 9', () => {
    const pass = "#####!!!!!$$$$$aA12";
    expect(Password(pass)).toBe('valid')
})
test('should Pass 10', () => {
    const pass = "12345678!!AaB";
    expect(Password(pass)).toBe('valid')
})
