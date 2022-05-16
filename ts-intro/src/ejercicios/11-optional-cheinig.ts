

interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1:Pasajero = {
    nombre: 'Luis'
}
const pasajero2:Pasajero = {
    nombre: 'Rosario',
    hijos: [ 'Luis', 'Arturo' ]
}

function imprimirHijos(pasajero:Pasajero):void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
    
}

imprimirHijos(pasajero1);