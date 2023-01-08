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

        console.log(`Votre ${this.poste} a ${this.rage} points de rage. Ses points d'attaque sont augmenté de 25% pendant un tour. Il possède donc ${this.attaque} points d'attaque jusqu'au prochain tour.`);

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

            herosArray.splice(herosArray.indexOf(this),1);

        } else {
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
        this.mana -= 2;

        if(this.mana <= 0){
            console.log(`Il ne reste plus que ${this.mana} points de mana à votre ${this.poste}. Il ne peut plus attaquer, mais récupère 7 points d'attaque pour le prochain tour.`);

            this.mana += 7;

            herosArray.splice(herosArray.indexOf(this),1);
        }
    }
}

export let manaArray = [7,9,11];




export let guerrier = new Guerrier ("string","number","guerrier","number","string");
export let mage = new Mage ("string","number","mage","number","string");
export let archer = new Archer ("string","number","archer","number","string");


export let herosArray = [guerrier,mage,archer];

