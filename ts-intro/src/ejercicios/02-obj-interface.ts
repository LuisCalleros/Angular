

/*
    ===== Código de TypeScript =====
*/

// let habilidades :string[] = ['bash', ' Conuter', 'Healing'];

interface Personaje {
    nombre2: string,
    hp: number,
    habilidades: string[], 
    puebloNatal?: string,
}

const personaje: Personaje  ={
    nombre2: 'luis',
    hp: 0,
    habilidades: ['Bash ','Coutner', 'Healing']
}
personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );
