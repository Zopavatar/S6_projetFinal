import { herosArray } from './heros.js';
import {Perso} from './persos.js';

class Boss extends Perso {
    constructor(nom,vie,attaque){
        super(nom,vie,attaque);
    }

    Duel(enigme){
 
        console.log("Le duel peut commencer !");

    }
}


let sauron = new Boss ("Sauron",300,20);
let chronos = new Boss ("Chronos",600,40);
let lilith = new Boss ("Lilith",250,18);


export let bossArray = [sauron,chronos,lilith];
