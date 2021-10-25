const sum = (input) => {

    let result = 0;
    for (let i = 0; i < input.length; i++) {
        result += input[i]
    }
    return result;
}
module.exports = sum;
