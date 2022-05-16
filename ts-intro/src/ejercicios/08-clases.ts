
class PerosonaNormal{
    

    constructor(
        public nombre:string,
        public direccion:string 
        ){}
}


class Hero extends PerosonaNormal{
   
    constructor(
         public alterEgo:string,
         public edad:number,
         public nombreReal: string
         ) {
             super( nombreReal, 'NY Usa' );
         }
}


const ironman = new Hero( 'Ironman', 45 , 'Antonio');

console.table(ironman);
