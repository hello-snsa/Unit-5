function runProgram(input) {

  input = input.trim();
  var newInput = input.split("\n");

  var arr = newInput[1].split(" ").map(Number);
  var data = newInput[0].split(" ").map(Number);
  var len = data[0];
  var k = data[1];


  // console.log(data, len, k, arr)



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


