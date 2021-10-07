function runProgram(input) {

  input = input.trim();
  var newInput = input.split(/[\r\n]+/);

  var noOfQuery = Number(newInput[0]);

  for (var a = 1; a <= noOfQuery; a++) {


    var data = newInput[a].split(" ").map(Number);

    console.log("data", data);



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