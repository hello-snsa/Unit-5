function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a + 1].split(" ").map(Number);
        var len = Number(newInput[a]);
        var result = "1 ";

        for (let i = 1; i < data.length; i++) {
            let count = 1;
            var isAvailable = true;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[i] < arr[j]) {
                    result += count + " "
                    isAvailable = false;
                    break;
                }
                count++;


            }
            // if(isAvailable)

        }
        console.log(result)


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