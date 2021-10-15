function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr = newInput[a + 1].split(" ").map(Number);

        //   console.log("arr", arr);
        let data = newInput[a].split(" ").map(Number);
        let k = data[1];

        k = k % arr.length;
        let newArr = [];



        for (let i = arr.length - 1; i >= (arr.length - k); i--) {
            // console.log("i k", k, i); //.join(" ")
            newArr.push(arr[i])
        }

        for (let i = 0; i < k; i++) {

            arr.pop()
        }
        // console.log(arr)


        console.log(newArr.join(" ") + " " + arr.join(" ")); //.join(" ")





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