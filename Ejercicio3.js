// @ts-nocheck
let button3 = document.getElementById("Ejercicio_3_button");
button3.addEventListener("click", makeExercise);



function makeExercise() {
    const arrayHighLimit = 100;
    const randomNumberHighLimit = 9;
    const randomNumberLowLimit = 0;

    let numberCounterArray = new Array(randomNumberHighLimit + 1).fill(0);

    console.log(makeArray(arrayHighLimit));
    printArray();


    function makeArray(highLimit) {
        let outputArray = [];
        for (let index = 0; index < highLimit; index++) {
            let randomNumber = generateRandomIntegerNumber(randomNumberHighLimit, randomNumberLowLimit);
            outputArray.push(randomNumber);
            updateCounterArray(randomNumber);
        }

        return outputArray;
    }

    function updateCounterArray(number) {

        numberCounterArray[number]++;
    }

    function generateRandomIntegerNumber(highLimit, lowLimit) {
        return Math.round(Math.random() * (highLimit - lowLimit) + lowLimit);
    }

    function printArray() {

        for (const index in numberCounterArray) {
            console.log("El número " + index + " aparece " + numberCounterArray[index] + " veces.");
        }


    }
}






