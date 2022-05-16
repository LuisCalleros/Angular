 interface Producto{
     desc:string, 
     precio: number,
 }

 const telefono: Producto = {
     desc:'Nokia l',
     precio: 2000
 }
 const tableta: Producto ={
     desc: "Ipad",
     precio:5000
 }

 function calculaISV( productos: Producto[] ){
    let total =0;

    productos.forEach( (producto: Producto ) =>{
        total += producto.precio
    } )

    return total *0.15;
 }

 const articulos = {}