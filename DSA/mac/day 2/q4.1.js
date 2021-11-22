function runProgram(input) {

    const newInput = input.split("\n").map((row) => {
      return row.trim().split(" ").map(Number);
    });
  
    const testCases = newInput[0];
    for (let t = 1; t <= testCases; t++) {
      const len = newInput[t * 2 - 1];
      //   console.log('len:', len)
      const data = newInput[t * 2];
      data.sort();
      // console.log("data:", data);
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
    }
  }