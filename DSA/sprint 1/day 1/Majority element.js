function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr = newInput[a + 1].split(" ").map(Number);
        var n = Number(newInput[a]);
        var n2 = n / 2;



        // console.log("data", arr, n, n2);

        let ans = -1;

        for (let i = 0; i < n - 1; i++) {
            let count = 1;

            for (let j = i + 1; j < n; j++) {

                if (arr[j] == arr[i]) {
                    count++;
                }
            }

            // console.log(count)
            if (count > n2) {
                // console.log(count)
                ans = arr[i]
                break;
            }


        }
        if (n <= 1)
            ans = arr[0];
        console.log(ans)

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