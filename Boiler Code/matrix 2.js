  function runProgram(input) {
  
    var newInput = input.split(/[\r\n]+/);
    var matDim = newInput[0].split(" ").map(Number);
    var r1 = matDim[0];
    var c1 = matDim[1];
    var r2 = matDim[2];
    var c2 = matDim[3];
    
  
    
    var mat1 = newInput.slice(1, r1 + 1).map(function (row) {
     return row.split(" ").map(Number);
   });
   
    
    //console.log("c2 "+c2);
   // console.log("r2 "+r2);
        
    var mat2 = newInput.slice(r1 + 1).map(function (row) {
     return row.split(" ").map(Number);
   });
    //console.log(mat1);
    //console.log(mat2);

  
    



  }//end of program



  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
    read = read.replace(/\n$/,"")
    runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });