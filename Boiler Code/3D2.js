function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
    var testcase = Number(newInput[0]);

    for (var t = 1; t <= testcase*2; t=t+2) {

        var data = newInput[t+1].split(" ").map(Number);
        var dim = newInput[t].split(" ").map(Number);
        var layer = dim[0];
        var rows = dim[1];
        var cols = dim[2];

        var mat = [];
        var count = 0;

        for (var a = 0; a < layer; a++) {
            var mat2 = [];
            for (var b = 0; b < rows; b++) {
                var mat3 = [];
                for (var c = 0; c < cols; c++) {
                    var temp = data[count];
                    mat3.push(temp);
                    count++;
                }
                mat2.push(mat3);
            }
            mat.push(mat2);
        }
        console.log(mat);

        //your code below:








    }//end test case
} //end of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
