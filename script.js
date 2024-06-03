function obtenerValores() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    return { numero1, numero2 };
}

function mostrarResultado(operacion, resultado) {
    document.getElementById('resultado').innerText = `Resultado de la ${operacion}: ${resultado}`;
}

function sumar() {
    const { numero1, numero2 } = obtenerValores();
    const resultado = numero1 + numero2;
    mostrarResultado('suma', resultado);
}
function multiplicar() {
    const { numero1, numero2 } = obtenerValores();
    const resultado = numero1 * numero2;
    mostrarResultado('multiplicación', resultado);
}
function dividir() {
    const { numero1, numero2 } = obtenerValores();
    if (numero2 === 0) {
        mostrarResultado('división', 'Error: División por cero');
    } else {
        const resultado = numero1 / numero2;
        mostrarResultado('división', resultado);
    }
}
function restar() {
    const { numero1, numero2 } = obtenerValores();
    const resultado = numero1 - numero2;
    mostrarResultado('resta', resultado);
}