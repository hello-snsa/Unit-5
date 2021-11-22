function runProgram(input) {
    let newInput = input.split("\n").map(function (data) {
        return data.trim()
    });
    for (let t = 1; t < newInput.length;) {
        let n = Number(newInput[t])

        let data = newInput.slice(t + 1, t + n + 1).map(row => row.split(''))
        const res = anagramPair(n, data)
        console.log(res)
        t = t + n + 1;
    }
}

function compare  (a1, a2){
    for (let i = 0; i < 10; i++) {
        if ( a2[i]!==a1[i] ) {
            return false
        }
    }
    return true
}

function anagramPair (len, data){
    data.forEach((elem) => {

        elem.sort()

    });
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (compare(data[i], data[j])) {
                count=count+1;
            }
        }
    }
    return count
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