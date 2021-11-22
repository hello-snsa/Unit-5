function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery*2; a+=2) {


        var data = newInput[a+1].split(" ").map(Number);

        data.sort()

        // console.log("data", data);
        let flag = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i] === 0) {
                flag = true;
                break;
            }
        }

        if (flag) {
            let str1 = "";
            let str2 = "";
            let str = "";
            let pos;
            for (let i = 0; i < data.length; i++) {
                if (data[i] === 0) {
                    str1 += data[i];
                    pos = i;
                }
            }
            str = data[pos + 1];
            str2 = data.slice(pos + 2).join("");

            str += str1 + str2;
            console.log(str);
        } else {
            console.log(data.join(""));
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