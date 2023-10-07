
function tests() {


}

function testEj1() {
    let testNumber = 0;
    test(checkIsNumber('2,b'), false, "Test " + (++testNumber) + " ejercicio 2.1");

    console.log('¡Todo OK! 👌 ejercicio 2.1')
}



/**
 *
 *
 * @param {*} resultado
 * @param {*} esperado
 * @param {string} message
 */
function test(resultado, esperado, message) {

    if (resultado !== esperado) {
        throw new Error("${resultado} es distinto de ${esperado} en message")
    }

    console.log('¡' + message + ' OK! 👌')
}