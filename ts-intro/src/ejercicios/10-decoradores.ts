
function ClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      newProperty = "holaMundo";
      hello= "overRide";
    };
  }
@ClassDecorator
class  MiSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.table("holaMundo");
        
    }
}

console.log( MiSuperClase );

const miClase= new MiSuperClase;

console.log( miClase.imprimir );

