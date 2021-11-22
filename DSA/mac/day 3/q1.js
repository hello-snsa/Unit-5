function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", data);


        let x = true;
        let len = arr.length;
        let vi = 0;
        let ab = 0


        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == 1 || arr[i] == 3 || (arr.length % i == 0)) {

                x = !x;





            }

            // console.log("arr i", arr[i]);
            if (x) {
                vi += arr[i]

            }
            else {
                ab += arr[i]
            }
        }
        // console.log(ab)
        // console.log(vi)


        if (ab > vi) {
            console.log("AB de Villiers");
        }

        else if (ab == vi) {
            console.log("Tie");
        }
        else {
            console.log("Virat Kohli");
        }
        // 
        // 
        // 

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