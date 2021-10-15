function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        var arr = newInput[a + 1].split(" ").map(Number);

        // arr.sort((a, b) => (a - b))
        // console.log("data", data, arr);

        let checkArr = [];
        let count = 1;
        let temp = arr[0];

        let max=0;
        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] != temp) {
                let check = fun(arr[i]);
                if (check) {
                    count++;
                    if(count>max)
                    {
                        count=max
                    }
                }

            }

            temp = arr[i];
            count=0;

        }

        function fun(a) {
            for (let i = 0; i < checkArr.length; i++) {
                if (a == checkArr[i]) {
                    return false;
                }
            }
            checkArr.push(arr[a])
            return true;


        }

        console.log(count)





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