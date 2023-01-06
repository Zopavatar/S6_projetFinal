import {Perso} from './persos.js';

export class Hero extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
    }

    defense(){

    }

    attaque(){

    }
}

console.log(Hero);


export class Guerrier extends Hero {
    constructor(nom,vie,attaque,rage){
        super(nom,vie,attaque);
        this.rage = rage;
    }
}

console.log(Guerrier);



