function spirallyTraversingAMatrix(N, matrix) {
    //write code here


    var res = fun(matrix, N);
    console.log(res);

    function fun(mat, N) {

        var left = 0;
        var right = N - 1;
        var top = 0;
        var bottom = N - 1;

        var max = N * N;

        var str = "";
        var count = 0;



        while (count < max) {

            //right wall
            for (var i = top; i <= bottom && count < max; i++) {

                str += mat[i][right] + " ";

                count++;
            }

            right--;



            //bottom wall
            for (var i = right; i >= left && count < max; i--) {


                str += mat[bottom][i] + " ";


                count++;
            }
            bottom--;

            //left wall

            for (var i = bottom; i >= top && count < max; i--) {
                str += mat[i][left] + " ";

                count++;
            }
            left++;

            //top wall

            for (var i = left; i <= right && count < max; i++) {
                str += mat[top][i] + " ";

                count++;
            }
            top++;



        }


        return str;
    }


}//End of runProgram()
