export class Enigmes {
    constructor(enigmeIntitu, enigmeRep){
        this.enigmeIntitu = enigmeIntitu;
        this.enigmeRep = enigmeRep;
    }

    enigmeQuestion(){
        let rand = Math.floor(Math.random()*enigmeArray.length);
        let ask = prompt(enigmeArray[rand].enigmeIntitu);
    }
}


export let enigme_a = new Enigmes("Qu’est-ce qui a des racines que personne ne voit, Qui est plus grand que les arbres, Qui monte, qui monte, Et pourtant ne pousse jamais ?","Une montage");
export let enigme_b = new Enigmes("Trente chevaux sur une colline rouge; D’abord ils mâchonnent, Puis ils frappent du pied, Ensuite ils restent immobiles.","Des dents");
export let enigme_c = new Enigmes("Sans voix, il crie, sans ailes, il voltige, sans dents, il mord, sans bouche, il murmure.","le vent");
export let enigme_d = new Enigmes("Une boite sans charnière, sans clé, sans couvercle: Pourtant à l’intérieur est caché un trésor doré.","un oeuf");


export let enigmeArray = [enigme_a,enigme_b,enigme_c,enigme_d];