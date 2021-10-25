const sum = require('../sum.js')
function test(description, fn) {
    console.log(description)
    fn()
}

function expected(received) {

    function toBe(expected) {
        if (expected === received) {
            console.log('test case passed')
        }
        else {
            console.log('failed')
            console.log(`expected: ${expected} received:${received}`)
        }
    }
    return { toBe }
}

test("sum of empty array is 0", () => {
    expected(sum([])).toBe(0);
});
test("sum of [1,2,3] is 6", () => {
    expected(sum([1, 2, 3])).toBe(6);
});
test("sum of [1,2,3,4,5] is 15", () => {
    expected(sum([1, 2, 3, 4, 5])).toBe(15);
});
test("sum of [0,1,2,3,3,2,1,0] is 12", () => {
    expected(sum([0, 1, 2, 3, 3, 2, 1, 0])).toBe(12);
});