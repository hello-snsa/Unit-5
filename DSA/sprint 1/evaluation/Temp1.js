function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 3; a += 3) {


        var data = newInput[a].split(" ").map(Number);
        var arr1 = newInput[a + 1].split(" ").map(Number);
        var arr2 = newInput[a + 2].split(" ").map(Number);

        //   console.log("data", data,arr1,arr2);

        let count = 0;
        let temp = arr1[0]
        for (let i = 0; i <= arr1.length; i++) {

            // if(arr1[i]!=temp)
            for (let j = 0; j < arr2.length; j++) {

                if (arr1[i] == arr2[j]) {
                    count++;
                    arr2[j] = -1;
                    break;

                }
            }
        }


        console.log(count)
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