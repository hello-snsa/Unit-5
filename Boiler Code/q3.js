function runProgram(input) {

    
    var newInput = input.split(/[\r\n]+/);
    
    var arr = newInput[0].split("");
    var N = Number(newInput[1]);
    console.log(arr)
    
    for(var i=0;i<arr.length;i++)
{
      if(arr[i]!=","&& arr[i]!="-"&&arr[i]!=":"&&arr[i]!=";"&&arr[i]!="%"&&arr[i]!="."){
      if(charCodeAt(i)>57)
      {
          arr[i]=Number(charCodeAt[i]+N-10);
      }
    arr[i]=arr[i]+N;

    }
}
  console.log(arr)
    
    
    
    
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
    
    
    