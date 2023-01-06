import {Perso} from './persos.js';


class Boss extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
    }

    Duel(perso, elEnigme){
        if (this.vie <= (this.vie/20)*100){
            let i = 0;
        
            do {
                i++;
        
                elEnigme.enigmeQuestion();
        
            } while (i = 4 || ask == enigmeArray[rand].enigmeRep);
        
            switch (true){
                case i <= 3:
                    this.vie = 0;
                    console.log(`${perso.nom} a vaincu ${this.nom}`);
                    break;
        
                case i = 4:
                    perso.vie = 0;
                    console.log(`${perso.nom} n'a plus que ${perso.vie} points de vie, ${perso.nom} est mort.`);
                    break;
            }
        }
    }
}


let sauron = new Boss ("Sauron",300,20);
let chronos = new Boss ("Chronos",600,40);
let lilith = new Boss ("Lilith",250,18);


export let bossArray = [sauron,chronos,lilith];
