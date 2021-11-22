function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var n = Number(newInput[a]);

        let even = 0;
        let odd = 0;
        for (let i = 1; i <= n; i++) {
          if (n % i === 0) {
            if (i % 2 === 0) {
              even++;
            } else {
              odd++;
            }
          }
        }
    
        if (even > odd) {
          console.log("Even Skewed");
        } else if (odd > even) {
          console.log("Odd Skewed");
        } else {
          console.log("Not Skewed");
        }
  
    



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