// @ts-nocheck
let button5 = document.getElementById("Ejercicio_5_button");
button5.addEventListener("click", makeExercise);



function makeExercise() {
    const arrayHighLimit = 100;
    const randomNumberHighLimit = 9;
    const randomNumberLowLimit = 0;

    const lowZeroValuesIndex = 25;
    const highZeroValuesIndex = 75;


    printArray(makeArray(arrayHighLimit));

    function makeArray(highLimit) {
        let outputArray = new Array(highLimit).fill("forzado a 0", lowZeroValuesIndex, highZeroValuesIndex + 1);
        for (let index = 0; index < highLimit; index == lowZeroValuesIndex - 1 ? index = highZeroValuesIndex + 1 : index++) {

            outputArray[index] = generateRandomIntegerNumber(randomNumberHighLimit, randomNumberLowLimit);
        }

        return outputArray;
    }



    function generateRandomIntegerNumber(highLimit, lowLimit) {
        return Math.round(Math.random() * (highLimit - lowLimit) + lowLimit);
    }

    function printArray(array) {

        for (const arrayIndex in array) {

            console.log("Posición " + arrayIndex + ", valor: " + array[arrayIndex]);
        }
    }

}






