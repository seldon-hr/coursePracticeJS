const h3 = document.querySelector('h3');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');
const btnClean = document.querySelector('#btnClean');
const pResult = document.querySelector('#result');

//*Use 'addEventListener'
// element.addEventListner('evento', code JS)

btn.addEventListener('click', sumar);
btnClean.addEventListener('click', clean);
//                            ⬆️ Solo se pone la función sin parentésis 
/* A diferencia de cuando lo llamamos con HTML, ya que, onclick es específico lo que hay que llamar
    sin embargo, addEventListner no funciona así, primero identifica el elemento, luego que evento
    va a escuchar, y posterior que función va a llamar cuando este evento ocurra, así le va agregar
    unos parentéisis para ejecutarla. */

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
