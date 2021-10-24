function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 6; a += 6) {


        var arr = newInput[a + 1]//.split("")//.map(Number);
        var arr1 = newInput[a + 3]//.split("")//.map(Number);
        var arr2 = newInput[a + 5]//.split("")//.map(Number);

        // console.log("data", arr, arr1, arr2);

        let count1 = 0;
        let count2 = 0;
        for (let j = 0; j < arr1.length; j++) {
            for (let i = 0; i < arr.length; i++) {

                if (arr1[j] == arr[i]) {
                    arr[i] = "-1"
                    count1++;
                    break;
                }
            }

        }

        for (let j = 0; j < arr2.length; j++) {
            for (let i = 0; i < arr.length; i++) {
                if (arr2[j] == arr[i]) {
                    arr[i] = "-1"
                    count2++;
                    break;
                }

            }

        }

        if (arr1.length == count1 && arr2.length == count2) {
            console.log("true");
        }
        else {
            console.log("false");
            // console.log("coount1", count1, count2);

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