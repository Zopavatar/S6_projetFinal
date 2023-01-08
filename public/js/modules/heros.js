import {Perso} from './persos.js';

class Hero extends Perso {
    constructor(nom,vie,poste,attaque,mode){
        super(nom,vie,attaque);
        this.mode = mode;
        this.poste = poste;
    }

    modeChoice(){
        switch(true){
            case this.mode == "attaque":
                this.attaque = this.attaque*1.4;
                this.vie = this.vie*0.75;

                alert(`votre ${this.poste} est en mode ${this.mode}. Il possède un quart de ses point de vie en moins (${this.vie}),mais ses points d'attaque augmentent de deux cinquième (${this.attaque})`);
                break;

            case this.mode == "defense":
                this.attaque *= 0.5;
                this.vie *= 2.5;

                alert(`votre ${this.poste} est en mode ${this.mode}. Il possède seulement la moitié de ses points d'attaque (${this.attaque}), mais ses points de vie augment de 2 fois et demi (${this.vie}) `);
                break;

            case this.mode == "normal":
                alert(`votre ${this.poste} est en mode ${this.mode}.`);
                break;

            default:
                alert(`Ceci ne fonctionne pas, veuillez introduire un mode`);
                this.mode = prompt(`Sur quel mode voulez-vous mettre votre ${this.nom}: defense ou attaque ?`);
        };  
    }
}

class Guerrier extends Hero {
    constructor(nom,vie,poste,attaque,mode){
        super(nom,vie,poste,attaque,mode);
        this.rage = 0;
    }

    competence(){
        this.rage += 1;

        alert(`La rage de votre ${(this.nom)} est de ${this.rage} points.`);

        if(this.rage == 4){
            this.attaque *=1.25;

            alert(`Votre ${this.poste} a ${this.rage} points de rage. Ses points d'attaque sont augmenté de 25% pendant un tour. Il possède donc ${this.attaque} points d'attaque jusqu'au prochain tour.`);

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

            alert(`Votre ${this.poste} n'a plus de flèches. Il va en rechercher 6 et passe son prochain tour.`);

            herosArray.splice(herosArray.indexOf(this),1);

        } else {
            alert(`L'attaque de votre ${this.poste} lui a coûté 2 flèches. Mais il a pu en récupérer une. Il en possède donc ${this.fleches}`);
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
            alert(`Il ne reste plus que ${this.mana} points de mana à votre ${this.poste}. Il ne peut plus attaquer, mais récupère 7 points d'attaque pour le prochain tour.`);

            this.mana += 7;

            herosArray.splice(herosArray.indexOf(this),1);
        } else {
            alert(`Le tour de votre ${this.poste} lui a coûté 2 points de mana.`);
        }
    }
}

export let manaArray = [7,9,11];




export let guerrier = new Guerrier ("string","number","guerrier","number","string");
export let mage = new Mage ("string","number","mage","number","string");
export let archer = new Archer ("string","number","archer","number","string");


export let herosArray = [guerrier,mage,archer];

