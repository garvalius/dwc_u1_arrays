// @ts-nocheck
let button7 = document.getElementById("Ejercicio_7_button");
button7.addEventListener("click", makeExercise);



function makeExercise() {

    let words = ["Lorem", "ipsum", "dolor", "sit", "amet,",
        "consectetur", "adipiscing", "elit,", "sed", "do", "eiusmod",
        "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."];


    console.log(makePhrase(words));


    function makePhrase(wordsArray) {

        let outputString = "";
        for (const word of words) {

            outputString += word;
            outputString += ' ';
        }

        // Quitando el último espacio
        outputString.slice(0, -1);

        return outputString;

    }

}






