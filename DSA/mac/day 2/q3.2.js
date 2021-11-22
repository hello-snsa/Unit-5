

function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var n = Number(newInput[0]);
    var arr = newInput[1].split(" ").map(Number);

    var noOfQuery = Number(newInput[2]);

    var ans = '';

    for (var a = 3; a < noOfQuery + 3; a++) {


        var data = newInput[a].split(" ").map(Number);


        let i = Number(data[0]);
        let j = Number(data[1]);

        // console.log("data", data);
        ans += fun(arr, n, i, j) + " ";

    }//end of Query


    function fun(arr, n, x, y) {

        let count = 0;
        count = ui(arr, n, y) -
            li(arr, n, x) + 1;
        return count;
    }

    function ui(arr, n, y) {
        let l = 0, h = n - 1;
        while (l <= h) {
            let mid = Math.ceil((l + h) / 2, 10);
            if (arr[mid] <= y)
                l = mid + 1;
            else
                h = mid - 1;
        }
        return h;
    }

    function li(arr, n, x) {

        let l = 0, h = n - 1;
        while (l <= h) {
            let mid = Math.ceil((l + h) / 2, 10);
            if (arr[mid] >= x)
                h = mid - 1;
            else
                l = mid + 1;
        }
        return l;
    }

    console.log(ans)

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