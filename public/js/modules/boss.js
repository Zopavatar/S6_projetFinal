import { enigmeArray } from './enigmes.js';
import { herosArray } from './heros.js';
import {Perso} from './persos.js';

class Boss extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
    }

    Duel(){
        console.log(`Votre boss ${this.nom} n'a plus que 20% de ses points de vie, le duel peut commencer !`);

        let compteur = 0;
        let randomEnigme = Math.floor(Math.random()*enigmeArray.length);

        do {
            compteur++;

            enigmeArray[randomEnigme].enigmeQuestion();

            if(enigmeArray[randomEnigme].enigmeRep !== enigmeArray[randomEnigme].propal){
                console.log(`Ceci n'est pas la bonne réponse, réessayez. Il vous reste ${compteur}/3 chances.`);
            } else if (enigmeArray[randomEnigme].enigmeRep == enigmeArray[randomEnigme].propal){
                console.log(`Vous avez bien répondu, le boss est vaincu !`);
                this.vie = 0;
            }
            
            if (compteur == 3){
                console.log(`Vous avez épuisé toutes vos chances. Le boss vous a vaincu et tue toute votre équipe`);
                herosArray.length = 0;
            }

        } while (enigmeArray[randomEnigme].enigmeRep !== enigmeArray[randomEnigme].propal && compteur < 3);
    }
}


let sauron = new Boss ("Sauron",700,20);
let chronos = new Boss ("Chronos",1200,40);
let lilith = new Boss ("Lilith",850,18);


export let bossArray = [sauron,chronos,lilith];
