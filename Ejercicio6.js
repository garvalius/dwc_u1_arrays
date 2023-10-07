// @ts-nocheck
let button6 = document.getElementById("Ejercicio_6_button");
button6.addEventListener("click", makeExercise);



function makeExercise() {


    let animals = ['perro', 'gato', 'tigre', 'león', 'pantera', 'dromedario'];

    let userInput = prompt("Dime el nombre de un animal");

    if (userInput != null && userInput.length > 0) {
        if (animalIsInList(userInput)) {
            alert(userInput + " si se encuentra en la lista");
        } else {
            alert(userInput + " no se encuentra en la lista");
        }

        console.log("Lista completa: ");
        console.log(animals);
    }



    function animalIsInList(animalName) {
        return animals.includes(animalName.toLowerCase());
    }
}






