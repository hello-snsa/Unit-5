function runProgram(input) {
    //   console.log('input:', input)
      input = input.trim();
      var newInput = input.split(/[\r\n]+/);
    
      var count = newInput[0].split(' ')[1];
    //   console.log('noOfQuery:', noOfQuery)
      var str=newInput[1];
      let temp="0";
      for(var i=0;i<str.length;i++){
          if(str[i]==temp){
            count--
          }
      }
    //   console.log('str:', str)
      console.log(i)
    }
    
   
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