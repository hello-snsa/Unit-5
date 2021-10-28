function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var str = newInput[1].split("");
    var data = newInput[2].split(" ").map(Number);
    var l = data[0];
    var r = data[1];
    console.log(r, str)


    const reverse = (l, r, arr) => {
        let left = arr.slice(0, l);
        let right = arr.slice(r + 1);
        let mid = arr.slice(l, r + 1).reverse();
        let str = [...left, ...mid, ...right];
        return str;
    }
    const ans = reverse(l, r, str);
    // console.log(ans)
    console.log(ans.join(""))


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


