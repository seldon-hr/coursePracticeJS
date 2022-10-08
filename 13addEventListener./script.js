const h3 = document.querySelector('h3');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form')
const btn = document.querySelector('#btnCalcular');
const btnClean = document.querySelector('#btnClean');
const pResult = document.querySelector('#result');
const title = document.querySelector('#body');

//*Use 'addEventListener'
// element.addEventListner('evento', code JS)

form.addEventListener('click', sumar);
btnClean.addEventListener('click', clean);
title.addEventListener('click', changeBackground);
//                            ⬆️ Solo se pone la función sin parentésis 
/* A diferencia de cuando lo llamamos con HTML, ya que, onclick es específico lo que hay que llamar
    sin embargo, addEventListner no funciona así, primero identifica el elemento, luego que evento
    va a escuchar, y posterior que función va a llamar cuando este evento ocurra, así le va agregar
    unos parentéisis para ejecutarla. */

function sumar(event) {
    // Método que llamamos para no ejectuar los métodos por defecto, como submit con los forms,
    // usando el evento de form

    /* Otra forma es indicar al útlimo botón del form  que se ade typeof button y no submit
        ya que, es el método que usualmente esta por defecto, por lo tanto envía el form. */

    console.log({event});
    event.preventDefault();
    const suma = parseInt(input1.value) + (+input2.value);
    pResult.innerText = `Resultado: ${suma}`;
    console.log(suma);
}

function clean() {
    input1.value = "";
    input2.value = "";
    pResult.innerText = "";
}


function changeBackground() {
    title.classList.add('.changeColor')
    console.log('change');
}