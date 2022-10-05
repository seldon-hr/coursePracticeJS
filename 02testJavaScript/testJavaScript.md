## Test de JavaScript

### Variables y operaciones
    1. ¿Qués es una variables y para qué sirve?
        Una variable es un espacio reservado en memoria, en el cual se puede guardar información, esta
        puede estar declarada por diversos tipos, como string, number, array, object, pero realemente
        cualquier variable al final es procesado por JS como string.
    
    2. ¿Cuál es la diferenecia entre declarar e inicializar una varible?
        La declaracion es la creación de esta, puede darse un valor, pero no necesariamente.
        Incialización es cuando ya se le brinda un dato específico a guardar.
    
    3. Determina el nombre y el tipo de dato para almacenar en variables la siguiente información.
        *Nombre = String
        *Apellido = String
        *Nombre de usuario = String
        *Edad = number
        *Correo electrónico = String
        *Mayor de edad = boolean
        *dinero ahorrado = number
        *deuda = array
    
    4. Traduce a código JavaScript las variables del ejemplo anterior
        const name = ('¿Cuál es su nombre?');
        const lastName = ('Apellido');
        const userName = ('Nombre de usuario: ');
        var age = parseInt('Edad: ');
        var mayorEdad = true;
        var saveMoney = 'number';
        var debts = [];

    5. Calcula e imprime la siguiente variables
        Nombre completo
        console.log(`Full name: ${name} ${lastName}`);

        const totalDebts = debts.reduce((sum, item) => sum + item, 0);

        console.log(`Dinero real: ${saveMoney - totalDebts}`);

    6. ¿Qué es una función?
        Es un pedazo de código que cumple una tarea en particular.
    
    7. ¿Cuándo me sirve usar una función en mi código?
        En el momento que tienes que repetir una tarea, y agilizar para solo hacerla llamar.
    
    8. Párametros y argumentos
        Los páraemetros son loa valoes expectantes a recibir.
        Los argumentos ya son los valoes que se pasan.

    9. Code

    10. ¿Qué es un condicional?
        Un pedazo de código que repite una acción
        bajo una condión se cumpla o deje de cumplirse.
    11. While, do while, for; for each
        For más como un ciclo a repetir.
        While, cuando por lo menos una vez se debe hacer el código,
        for of, más para recorre arrays.
    
    12. ¿Qué es un ciclo infinito y por qué es un problema?
        Este es un condicional que nunca se va a cumplir, de manera que, obtenemoes una acción que se repitira por la eternidad, o después de una cantidad ingente de tiemp. Es ideal no tener estos ciclos, ya que, saturan memoria.

    13. ¿Puedo mezclar ciclos y condicionales?
        Sí, se pueden combinar ambos tipos de estructuras.

    14. Code

### Listas

    15. ¿Qué es un array?
        Un conjunto de datos, o estructura de datos.
    
    16. ¿Qué es un objeto?
        Es ua colección de propiedades, y una propiedade es un valor de key; valores.

    17. Uasr arrays u objetos
        Arrays: conjunto de datos.
        Objetcts: conjunto de propiedades, así como de constructores.
    
    
    