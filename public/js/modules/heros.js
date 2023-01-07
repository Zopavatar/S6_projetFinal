import {Perso} from './persos.js';

class Hero extends Perso {
    constructor(nom,vie,poste,attaque,mode){
        super(nom,vie,attaque);
        this.mode = mode;
        this.poste = poste;
    }
}

class Guerrier extends Hero {
    constructor(nom,vie,poste,attaque,mode){
        super(nom,vie,poste,attaque,mode);
        this.rage = 0;
    }

    competence(){
        this.rage += 1;

        console.log(this.attaque);

        if(this.rage == 4){
            this.attaque *=1.25;
        }

        if(this.rage == 5){
            this.attaque /=1.25;
            this.rage = 0;
        }
    }
}



class Archer extends Hero {
    constructor(nom,vie,poste,attaque,mode){
        super(nom,vie,poste,attaque,mode);
        this.fleches = 0;
    }

    competence(){
        let flechesPerte = this.fleches - 2;
        this.fleches = flechesPerte + 1;


        if(this.fleches <= 0) {
            this.fleches += 6;

            console.log(`Votre ${this.poste} n'a plus de flèches. Il va en rechercher 6 et passe son prochain tour.`);
        }
        else {
            console.log(`L'attaque de votre ${this.poste} lui a coûté 2 flèches. Mais il a pu en récupérer une. Il en possède donc ${this.fleches}`);
        }

    }
}

export let flechesArray = [7,8,9,10,11];



class Mage extends Hero {
    constructor(nom,vie,poste,attaque,mode){
        super(nom,vie,poste,attaque,mode);
        this.mana = 0;
    }

    competence(){
        
    }
}

export let manaArray = [7,9,11];




export let guerrier = new Guerrier ("string","number","guerrier","number","string");
export let mage = new Mage ("string","number","mage","number","string");
export let archer = new Archer ("string","number","archer","number","string");


export let herosArray = [guerrier,mage,archer];

