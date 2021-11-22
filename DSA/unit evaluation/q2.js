function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var len = Number(newInput[a]);
        var data = newInput[a + 1].split(" ").map(Number);

        //   console.log("data", data,len);

        if (len < 3) {
            console.log(-1);
        } else {
            let count = 0;
            for (let i = 1; i < len - 1; i++) {
                if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
                    count++;
                }
            }
            console.log(count);
        }






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