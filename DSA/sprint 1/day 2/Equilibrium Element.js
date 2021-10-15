function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var len = newInput[0];
    var arr = newInput[1].split(" ").map(Number);

    // console.log(data, len, k, arr)


    let totalsum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalsum += arr[i];
    }


    // console.log(sum)

    let med = totalsum / 2;
    let sum = 0;
    let ans = -1;


    for (let i = 0; i < arr.length; i++) {

        if ((totalsum - arr[i]) / 2 == sum) {
            ans = i + 1;
            break;
        }
        // console.log(sum,i)
        sum += arr[i]


    }

    console.log(ans);








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


