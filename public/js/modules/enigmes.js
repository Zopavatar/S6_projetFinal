export let enigmeArray = ["1","2","3","4"];

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