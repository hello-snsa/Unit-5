function runProgram(input) {
    
	var n=Number(input);
    
    var abc= input.split(" ");
    
    var a=Number(abc[0]);
    var b = Number(abc[1]);
    var c = Number(abc[2]);
    var d = Number(abc[3]);
    var e = Number(abc[4]);
    var f = Number(abc[5]);
    
    
}
if (process.env.USERNAME === "SNSA") {
    runProgram(``)
} else {
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
}