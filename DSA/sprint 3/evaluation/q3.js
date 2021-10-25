function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    const [len, k] = newInput[0].split(" ").map(i => Number(i));

    const str = newInput[1];
    const q1 = newInput[2].split(" ").map(i => Number(i));
    const q2 = newInput[3].split(" ").map(i => Number(i));

    

    const operate = (len, k, str, q1, q2) => {
        let arr = str.split("");

        let res = reverse(q1[0], q1[1], arr)
        let res2 = reverse(q2[0], q2[1], res)
        return res2.join("");

    }

    const reverse = (l, r, arr) => {
        let left = arr.slice(0, l);
        let right = arr.slice(r + 1);
        let mid = arr.slice(l, r + 1).reverse()
        let str = [...left, ...mid, ...right]
        return str;
    }



    const res = operate(len, k, str, q1, q2)
    console.log(res)

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


