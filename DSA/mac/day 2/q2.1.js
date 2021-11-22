function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);

    var testcase = Number(newInput[0]);
    var r = 0;

    for (var a = 0; a < testcase; a++) {

        var dim = newInput[r + a + 1].split(" ").map(Number);
        var rows = dim[0];
        var cols = dim[0];

        var data = newInput.slice(r + a + 2, r + a + 2 + rows)
            .map(function (row) {
                return row.split("")//.map(Number);
            });

        r = r + rows;

        // console.log(data);
        let n=data.length;
        const res = anagramPair(n, data)

       
const anagramPair = (len, data) => {
    data.forEach((elem) => {

        elem.sort()

    });
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (compare(data[i], data[j])) {
                count++
            }
        }
    }
    return count
}
const compare = (a1, a2) => {
    for (let i = 0; i < 10; i++) {
        if (a1[i] !== a2[i]) {
            return false
        }
    }
    return true
}
    

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});