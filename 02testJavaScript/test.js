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

