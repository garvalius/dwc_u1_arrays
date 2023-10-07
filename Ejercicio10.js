// @ts-nocheck
let button10 = document.getElementById("Ejercicio_10_button");
button10.addEventListener("click", makeExercise);

function makeExercise() {

    const MIN_PRICE = 75.0;

    let product1 = ['Televisor 14"', 95.0];
    let product2 = ['Radio MP3', 80.0];
    let product3 = ['Paquete cacahuetes"', 1.35];
    let product4 = ['Barra de pan', 0, 45];
    let product5 = ['Teléfono"', 75.0];
    let product6 = ['Monitor 21"', 88.0];


    let productList = [];
    productList.push(product1);
    productList.push(product2);
    productList.push(product3);
    productList.push(product4);
    productList.push(product5);
    productList.push(product6);

    console.log("TOTAL PRODUCTOS");
    console.log(productList);
    console.log("PRODUCTOS FILTRADOS");
    console.log(filterProducts(productList));


    function filterProducts(inputArray) {
        return inputArray.filter((product) => product[1] > MIN_PRICE);
    }

}






