function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        var arr = newInput[a + 1].split(" ").map(Number);

        arr.sort((a, b) => (a - b))
        // console.log("data", data, arr);

        let ans=[];

        let temp=arr[0];
        
        for(let i=0;i<=arr.length;i++)
        {
            if(arr[i]!=temp)
            {
                ans.push(temp);
                temp=arr[i]
            }


        }

        console.log(ans.length)

        



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