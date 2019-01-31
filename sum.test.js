const calcul = require ('./sum');
const myMock = require ('./__mocks__/sum')

// This test used expect and toBe to test that two values were exactly identical. 
test('adds 1 + 2 to equal 3', () => {
    expect(calcul.sum(1, myMock.two)).toBe(3)
});

test('substracts 1 - 2 to equal -1', () => {
    expect(calcul.sous(1, myMock.two)).toBe(-1)
});

test('multiplies 1 * 2 to equal 2', () => {
    expect(calcul.mult(1, myMock.two)).toBe(2)
});

test('devides 4 / 2 to equal 2', () => {
    expect(calcul.div(4, myMock.two)).toBe(2)
});

test("nombre de secondes écoulées depuis l'an 2000", () => {
    expect(calcul.dateDiff(new Date(2019,0,1),new Date(2019,0,1,0,1,0))).toBe(60) // 0 = janvier 11 = decembre -- on calcul 60s de diff entre les 2 dates
});