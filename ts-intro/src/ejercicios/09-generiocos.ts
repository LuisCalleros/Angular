

function queTipo<T>(argumento: T){
    return argumento;
}

let soyString = queTipo('Hola Mundo');
let soyNumber = queTipo(2);
let soyArreglo = queTipo([1, 2, 3,]);
let soyExplicito = queTipo<number>(100);


