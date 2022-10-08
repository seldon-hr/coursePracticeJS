const h3 = document.querySelector('h3');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function sumar() {
    const suma = parseInt(input1.value) + (+input2.value);
    pResult.innerText = `Resultado: ${suma}`;
    console.log(suma);
}

function clean() {
    input1.value = "";
    input2.value = "";
    pResult.innerText = "";
}
