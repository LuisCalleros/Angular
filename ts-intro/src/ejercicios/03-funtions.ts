

/*
    ===== Código de TypeScript =====
*/

// let habilidades :string[] = ['bash', ' Conuter', 'Healing'];


function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b:number):number =>{
    return a + b;
}

function multiplicar(numero: number, otroNumebro?: number, base:number =2) {
    return numero * base;
}
interface PersonajeLord {
    nombre: string;
    pv: number;
    mostrarHp: () => void
}

function curar( personaje: PersonajeLord, curarX: number ): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLord ={
    nombre: "Lord mordor",
    pv: 55,

    mostrarHp(){
        console.log("puntos de vida", this.pv);
        
    }
}

curar( nuevoPersonaje, 20 )

nuevoPersonaje.mostrarHp();


// const resul = sumarFlecha(5, 4);
// console.log(resul);


