// @ts-nocheck
let button2 = document.getElementById("Ejercicio_2_button");
button2.addEventListener("click", makeExercise);



function makeExercise() {
    const COLUMNS = 5;
    const ROWS = 3;


    print2DArray(makeArray(COLUMNS, ROWS));

    function makeArray(columns, rows) {
        let outputArray = [];
        for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
            let columnArray = [];
            for (let columnNumber = 0; columnNumber < columns; columnNumber++) {

                columnArray.push('f' + (rowNumber + 1) + 'c' + (columnNumber + 1));

            }
            outputArray.push(columnArray);
        }

        return outputArray;
    }

    function print2DArray(inputArray) {
        inputArray.forEach(element => {
            let rowOutput = '';
            element.forEach(element => rowOutput += element + " | ");
            // Quitando el último separador
            console.log(rowOutput.slice(0, -1));
        }
        );

    }


}




