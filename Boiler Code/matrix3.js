function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var rows = 0;

  var result = "";
  //console.log(newInput)

  for (var i = 1; i < newInput.length; i = i + rows + 1) {
    rows = Number(newInput[i]);
    var size = rows;
    var matrix = [];

    for (var j = 0; j < size; j++) {
      var row = newInput[i + j + 1].split(" ").map(Number);
      matrix.push(row);
    }

    // console.log(matrix);
      
      
//you code here
      
   
  
  
  
  
  
  
  
  
  
  }
  

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
