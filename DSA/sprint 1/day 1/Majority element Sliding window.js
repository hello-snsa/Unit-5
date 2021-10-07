function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var arr = newInput[a + 1].split(" ").map(Number);
        var n = Number(newInput[a]);
        var n2 = n / 2;

        let ans = -1;

        let f = 0;
        let l = n - 1;

        function fun() {
            if (n <= 1) {
                return n;
            }

            while (f < n) {
                if (f == l) {
                    return ans;
                }


                if (f < l) {
                    if (arr[f] == arr[l]) {
                        f = l + 1;
                        l = n - 1;
                        if ((f - l + 1) > n2) {
                            ans = arr[f];
                            return arr[f];
                        }
                    }

                }
                else {
                    // f++;
                    l--;
                }

            }
        }


        console.log(fun())


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