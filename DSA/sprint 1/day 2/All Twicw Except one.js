function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a + 1].split(" ").map(Number);



        let count = 1;
        // for(let j)
        let temp = data[0];
        data = data.sort((a, b) => (a - b))
        // console.log("data", data);

        for (let i = 1; i < data.length + 1; i++) {

            if (data[i] == temp) {
                count++;
                // console.log(data[i])
            }


            else {
                temp = data[i];

                // console.log("data[i],temp ", data[i], temp)
                // console.log("count ", count)

                if (count < 2) {
                    // isAvailable=false;

                    // console.log("NO", data[i-1])
                    console.log(data[i - 1])
                    // console.log("count ", count)
                    break;
                }

                count = 1;
            }


            // if(isAvailable)

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