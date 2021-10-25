function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);
  
    var noOfQuery = Number(newInput[0]);
  
    for (var a = 1; a <= noOfQuery; a++) {
  
  let [n,m]=newInput[a*2-1].split(" ").map(Number);
     
  let str=newInput[a*2].split("");
  let res= game(n,m,str);

  if(res>0 && res%2!=0){
      console.log("yes")
  }
  else{
      console.log("no")
  }
  
    }//end of Query
  



const game=(n,m,str)=>{
    let stack=[];
    for(let i=0;i<n+m;i++)
    {
        if(str[i]===0)
        {
            return -1;
        }else{
            stack.pop()
        }
    }
}
return stack.length

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