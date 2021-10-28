function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a + 1].split(" ").map(Number);


        const findSpan = (len, data) => {
            let res = [];
            for (let i = len - 1; i >= 0; i--) {
                let span = 1;
                for (let j = i - 1; j >= 0; j--) {
                    if (data[j] <= data[i]) {
                        span++;
                    } else {
                        break;
                    }
                }
                res[i] = span;
            }
            return res;
        }


        const ans = findSpan(len, data);
        console.log(ans.join(''))
    }//end of Query

}//End of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = ``;
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});//End of program