function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var data = newInput[0].split(" ").map(Number);
    var n = data[0];
    var k = data[1];
    // console.log(data, n, k, arr)

    let isAvailable = -1;
    const fun = (arr, k, l, r) => {
        if (r >= l) {
            let mid = l + Math.floor((r - l) / 2);


            if (arr[mid] == k) {
                isAvailable = 1;
                console.log(isAvailable);
                return;
            }

            else if (arr[mid] > k) {
                return fun(arr, k, l, mid - 1);

            }
            else {
                return fun(arr, k, mid + 1, r);
            }


        }
    }

    fun(arr, k, 0, n - 1);

    if (isAvailable != 1) {
        console.log(isAvailable);
    }



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


