const h3 = document.querySelector('h3');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h3,
    p,
    parrafito,
    pid,
    input,
});

/* 
    *Modificar, eliminar o añadir a elementos
*/

h3.innerText = 'Esto fue un chiste'; //this only inject plane text
h3.innerHTML = "aquí si podemos poner HTML" //be careful with this, cuz here it is an option to inject html code
console.log(h3.getAttribute("class")); // if there is a class
h3.setAttribute('class', 'green'); //Modify attibures of our elements

/* 
    Para modificar clases y trabajar con estas,
    cambiar, añadir o eliminar, podemos partir de este método.
    .classList
*/

h3.classList.add('extra');
        //.toggle le pongamos o le quitemos una clase
        //.contains tienes la clase o no nos retorna true or false

input.value = "895";

/* 
    *Crear elementos nuevos
*/

    // console.log(document.createElement('img'));
    const img = document.createElement('img');
    //Modifico el attributo en su propiedad src
    pid.innerHTML = ""; //Eliminando el texto previo antes de agregar la imagen.
    img.setAttribute('src', 'https://dictionary.cambridge.org/us/external/images/quiz/hook/arts-and-crafts_2.jpg?version=5.0.252');
    //Lo añadismos al dom
    pid.append(img);