function runProgram(input) {
  
  var newInput = input.split(/[\r\n]+/);

  var mat = newInput.slice(1).map(function (row) {
                return row.split(" ").map(Number);
            });
  //console.log(mat);

  var dim = newInput[0].split(" ").map(Number);
  var rows = dim[0];
  var cols = dim[1];

  




} //end of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
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
});
