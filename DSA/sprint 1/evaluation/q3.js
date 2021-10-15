function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);



    // console.log(arr)
    let count = 1;

    let max = 0;
    let temp=arr[0]
    let isAvailable=false
    if(temp%2!=0)
    isAvailable=true;

    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] == temp && temp % 2 != 0) {
            count++;
            isAvailable=true;
        }
        else {
            if (count > max && isAvailable) {
                max = count;
            }

            count = 1;
        }

        temp=arr[i]
    }

console.log(max)

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


