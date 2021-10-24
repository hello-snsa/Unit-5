const { sum } = require("./fn.js")

const a = true;
const b = false;
describe("test01", () => {
    test("adding numbers", () => {
        expect(sum(1, 1)).toBe(2)
    })
})

describe("test02", () => {

    test("adding numbers", () => {

        expect(sum(1, 1)).toBe(2)

    })

})

test("checking Array", () => {

    expect([1]).toEqual([1])
})

//toBeFalsy()
test("check toBeFalsy", () => {
    expect(a).toBeFalsy()
})
test("check toBeFalsy", () => {
    expect(b).toBeFalsy()
})

// toBeTruthy()
test("check toBeTruthy", () => {
    expect(a).toBeTruthy()
})
test("check toBeTruthy", () => {
    expect(b).toBeTruthy()
})

