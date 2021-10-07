  function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);

    var testcase = Number(newInput[0]);
    var r = 0;

    for (var a = 0; a < testcase; a++) {
      
      var dim = newInput[r + a + 1].split(" ").map(Number);
      var rows = dim[0];
      var cols = dim[1];

      var mat = newInput.slice(r + a + 2, r + a + 2 + rows)
        .map(function (row) {
          return row.split(" ").map(Number);
        });
      
      r = r + rows;

      console.log(mat);

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