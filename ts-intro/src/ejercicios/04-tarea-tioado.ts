

interface SuperHero{
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion:() => void;
}
interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}

const superHero ={
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'main St',
        pais: 'USA',
        ciudad: 'NY',
    },

    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;

 1   }
}

const direccion = superHero.mostrarDireccion();
console.log(direccion);
