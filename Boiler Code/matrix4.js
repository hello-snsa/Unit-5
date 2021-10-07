function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);

    var data=[];
  var rows = 0;
    for (var i = 1; i < newInput.length-1; i=i+rows+1)
    {
        var matrix = [];
        data = newInput[i].split(" ").map(Number);
        var rows = data[0];
        var cols = data[1];
        

        for (var j = 1; j <= rows;j++)
        {
            var temp = newInput[i + j].split(" ").map(Number);
            matrix.push(temp);
            
        }

     console.log(matrix);

    //you code here

//.
//.

//.
//.
//
//
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