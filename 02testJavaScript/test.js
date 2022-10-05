// let saveMoney = 3000;
// let debts = [100, 30, 50, 30];

// const totalDebts = debts.reduce((sum, item) =>
//     sum + item, 0);

// //  console.log(totalDebts);   
// console.log(`Real Money: ${saveMoney-totalDebts}`);



// Uso of funcionts
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";



function printName(nombreCompleto, user) {
    console.log(`My name is ${completeName} but you could me ${nickname}`);
}

printName(completeName, nickname);


//Conditionals

// const tipoDeSuscripcion = "Basic";

// if ( tipoDeSuscripcion== "Free") {
//     console.log("Solo puedes tomar los cursos gratis");
// } else if(tipoDeSuscripcion == "Basic"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (tipoDeSuscripcion == "Expert") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (tipoDeSuscripcion == "ExpertPlus") {
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }

//Next levle
const tipoDeSuscripcion = "Basic";

if ( tipoDeSuscripcion== "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

const basicSuscripccion = {
    tipoDeSuscripcion: "Basic",
    oportunidad: "Puedes tomar casi todos los cursos de Platzi durante un mes",
}

basicSuscripccion.tipoDeSuscripcion == "Basic" ? console.log(basicSuscripccion.oportunidad) : "didn't apply";
// Operador ternario


//Uso de whiles 
let i = 0;
while (i < 4) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while (i >=2) {
    console.log('El valor de i es ' + i);
    i--;
}

//Fail or not with prompt

const rta = prompt('Cuánto es dos más dos?');

parseInt(rta) == 4 ? alert('Great') : alert ('fail');


//*Objects and arrays
//Print first value
const fruits = ['🍉','🍏','🥝','🥑',''];

function printFirst(array) {
    console.log(array[0]);
}

printFirst(fruits);

//Print all values, one by one
function printAllValues(array) {
    array.forEach(item => {
        console.log(item);
    });
}

printAllValues(fruits);

//Print all properties of an object

const person = {
    name: 'Juan',
    nickname: 'Juanes',
    fruit: "🥝",
};

function printAllProperties(personaje) {
    //Object.keys to access to propeties of and objects
    // cuz each properties is an a key.
    Object.values(personaje).forEach((item) => {
        console.log(item);
    })
}

printAllProperties(person);

/* 
    With Object.keys you access to properties names
    for isntnace to
    output Array ["name", "nickname", "fruit"]
*/