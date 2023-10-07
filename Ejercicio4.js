// @ts-nocheck
let button4 = document.getElementById("Ejercicio_4_button");
button4.addEventListener("click", makeExercise);



function makeExercise() {
    const arrayHighLimit = 25;
    const randomNumberHighLimit = 100;
    const randomNumberLowLimit = 0;

    let generatedNumbersArray = [];

    console.log(makeArray(arrayHighLimit));


    function makeArray(highLimit) {
        let outputArray = [];
        for (let index = 0; index < highLimit; index++) {
            let randomNumber;
            do {
                randomNumber = generateRandomIntegerNumber(randomNumberHighLimit, randomNumberLowLimit);
            } while (numberIsInArray(randomNumber));

            outputArray.push(randomNumber);
            updateCounterArray(randomNumber);
        }

        return outputArray;
    }

    function updateCounterArray(number) {

        generatedNumbersArray.push(number);
    }

    function numberIsInArray(number) {
        return generatedNumbersArray.find((e) => e == number) != undefined;
    }

    function generateRandomIntegerNumber(highLimit, lowLimit) {
        return Math.round(Math.random() * (highLimit - lowLimit) + lowLimit);
    }


}






