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
        this.fleches -= 2;
        this.fleche += 1;

        while (this.fleche <= 0) {
            heroArray.splice(heroArray.indexOf(this));
            this.fleches += 6;
        }
    }
}

export let flechesArray = [7,8,9,10,11];



class Mage extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
        this.mana = 0;
    }

    competence(){
        this.mana -= 2;

        while (this.mana <= 0){
            heroArray.splice(heroArray.indexOf(this));
            this.mana += 7;
        }
    }
}

export let manaArray = [7,9,11];




export let guerrier = new Guerrier ("string","number","number");
export let mage = new Mage ("string","number","number");
export let archer = new Archer ("string","number","number");


export let herosArray = [guerrier,mage,archer];

