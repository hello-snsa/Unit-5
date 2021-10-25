function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a + 1].split(" ").map(Number);

        //   console.log("data", data);
        let result = [];

        for (let i = 0; i < data.length - 1; i++) {
            let isAvailable = true;
            for (let j = i; j < data.length; j++) {


                if (data[i] < data[j]) {
                    result.push(data[j]);
                    isAvailable = false;
                    break;
                }
            }

            if (isAvailable) {
                result.push(-1);
            }

        }
        result.push(-1);
        
        // console.log(result);




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