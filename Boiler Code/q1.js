function runProgram(input) {

    
    var newInput = input.split(/[\r\n]+/);
    
    var data = newInput[1].split("");
    //console.log(data)
    
  var temp=data[0];
 
  if(data.length<=1){
      console.log(data[0])
  }
  else{
for(var j=0;j<data.length;j++)
{ var arr=[];
  for(var i=1;i<data.length;i++){
      if(data[i]!=data[i+1]&& data[i]!=data[i-1]){
          arr.push(data[i]);
      }
  }
   
    
}
if(arr.length<1)
{
    console.log(-1);
}
else{
    console.log(arr.join(""));
}
data=arr;
}   
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
    
    
    