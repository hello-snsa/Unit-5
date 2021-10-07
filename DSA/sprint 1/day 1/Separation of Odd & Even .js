function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 3; a += 3) {


        var arr = newInput[a + 1].split(" ").map(Number);
        var n = Number(newInput[a]);
        var oe = Number(newInput[a + 2]);

        arr.sort((a, b) => (a - b))

        // console.log("data", arr, n, oe);

        let even = '', odd = '';


        for (let i = 0; i < n; i++) {

            if (arr[i] % 2 == 0) {
                even += arr[i] + " ";
            }
            else {
                odd += arr[i] + " ";
            }
        }

        if (oe % 2 == 0) {
            console.log(odd + even)
        }
        else {
            console.log(even + odd)

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