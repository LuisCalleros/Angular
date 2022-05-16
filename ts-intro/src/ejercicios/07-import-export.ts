
// import { calculaISV, Producto } from "./ejercicios/06-desestructar-fution";
// import  

import { calculaISV, Producto } from "./06-desestructar-fution";

const carritoCompras: Producto[] = [
    {
        desc:'telefono',
        precio:200
    },
    {
        desc:'tableta',
        precio:100 
    }

];

const [ total, isv ] = calculaISV( carritoCompras );

console.log("total: ", total);
console.log("ISV: ", isv);


