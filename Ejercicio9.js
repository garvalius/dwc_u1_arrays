// @ts-nocheck
let button9 = document.getElementById("Ejercicio_9_button");
button9.addEventListener("click", makeExercise);

function makeExercise() {

    const minCharsNumber = 6;

    let names = ["Rafael", "Anselmo", "Ismael", "Eliseo", "Wenceslao",
        "Armando", "Ana", "Eva", "Jesús", "Manuel", "Pedro", "Gaspar", "Isabel"];

    console.log(getWordsWithMinLettersNumber(names));


    function getWordsWithMinLettersNumber(inpuArray) {

        return inpuArray.filter((word) => word.length >= minCharsNumber);
    }

}






