function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 3; a += 3) {

        var len = Number(newInput[a]);
        var data = newInput[a + 1].split(" ").map(Number);
        let query = Number(newInput[a + 2]);
        //   console.log("data", data,len,query);

        let oddArr = [];
        let evenArr = [];

        for (let i = 0; i < len; i++) {
            if (data[i] % 2 != 0) {
                oddArr.push(data[i])
            } else {
                evenArr.push(data[i])
            }
        }
        if (query == 1) {
            console.log([...evenArr, ...oddArr].join(' '))

        } else {
            console.log([...oddArr, ...evenArr].join(' '))
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