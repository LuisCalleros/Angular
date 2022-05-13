interface Reproductor {
    volumen: number,
    segundo: number,
    cacion: string,
    detalles: Detalles,
}
interface Detalles{
    autor: string,
    anio: number,
}

const reproductor: Reproductor= {
    volumen: 90,
    segundo: 36 ,
    cacion:'mes',
    detalles:{
        autor:'Nirvana',
        anio: 2006,
    }
}
const { volumen, segundo, cacion, detalles } = reproductor


const { autor, anio } = detalles

// console.log('el volumen es: ', reproductor.volumen);
// console.log('el segundo es: ', reproductor.segundo);
//  console.log('el cancion es: ', reproductor.cacion);
// console.log('el autor es: ', reproductor.detalles.autor);

const dbz: string[] =['Goku', 'Veeta', 'Trunks']

const[, , p3] =dbz;

console.log( 'personaje 3: ', p3 );

