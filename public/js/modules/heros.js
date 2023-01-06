import {Perso} from './persos.js';

class Guerrier extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
        this.rage = 0;
    }

    competence(){
        this.rage++;

        if (this.rage == 4) {
            this.attaque = this.attaque*1.25;
            this.rage = 0;
        }
    }
}



class Archer extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
        this.fleches = 0;
    }

    competence(){
        
    }
}

export let flechesArray = [7,8,9,10,11];



class Mage extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
        this.mana = 0;
    }
}

export let manaArray = [7,9,11];




let guerrier = new Guerrier (who,vida,war);
let mage = new Mage (who,vida,war);
let archer = new Archer (who,vida,war);


export let heroArray = [guerrier,mage,archer];

