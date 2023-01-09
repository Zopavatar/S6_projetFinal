// imports boss

import {bossArray} from './modules/boss.js';


//import heros

import {flechesArray, herosArray, manaArray} from './modules/heros.js'

import {guerrier} from './modules/heros.js'
import {mage} from './modules/heros.js'
import {archer} from './modules/heros.js'



//initialisation de partie

let bossAleat = Math.floor(Math.random()*bossArray.length);
let flechesAleat = Math.floor(Math.random()*flechesArray.length);
let manaAleat = Math.floor(Math.random()*manaArray.length);

let elBoss = bossArray[bossAleat];
let vieTot_boss = elBoss.vie;

archer.fleches = flechesArray[flechesAleat];
mage.mana = manaArray[manaAleat];


let askEnigme = "";



alert(`Bienvenue dans cette nouvelles partie de Geek of Legends ! Votre équipe est constituée de 3 héros, un guerrier / un mage / un archer, qui vont se battre courageusement contre le boss ${elBoss.nom}. Continuez pour nommer les membres de votre équipe`);


// définition du nom des personnages

herosArray.forEach(element =>
    element.nom = prompt(`Donnez un nom à votre ${element.poste}`)
);



// définition point de vie

let ptVie = 800;

alert(`Vous avez nommé vos personnages ${guerrier.nom}, ${mage.nom} et ${archer.nom}. Vous allez maintenant pouvoir leur distribuer ${Math.floor(ptVie)} points de vie`);

herosArray.forEach(element => {

     do {
        element.vie = prompt(`Combien de point de vie voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${Math.floor(ptVie)}/800`);

        if (element.vie > ptVie) {
            alert("Vous n'avez pas suffisamment de points");
        } 
        else if (element.vie < 0){
            alert("Veuillez entrer un nombre positif");
        }
        else if (isNaN(element.vie) == true){
            alert("Ceci ne fonctionne pas. Veuillez entrer un nombre, svp");
        };

    } while (element.vie > ptVie || element.vie < 0 || isNaN(element.vie) == true); 
    

    ptVie -= element.vie;
});

if (ptVie !== 0) {
    let ajout = prompt(`Il vous reste ${Math.floor(ptVie)} points de vie. Choisissez à quel personnage les donner: le guerrier, le mage ou l'archer ?`);

    switch(true){
        case(ajout == "guerrier"):
            guerrier.vie = (guerrier.vie*1)+ptVie;
            alert(guerrier.vie);
            break;

        case(ajout == "mage"):
            mage.vie = (mage.vie*1)+ptVie;
            alert(mage.vie);
            break;

        case(ajout == "archer"):
            archer.vie = (archer.vie*1)+ptVie;
            alert(archer.vie);
            break;
    };

    ptVie = 0;

    alert(`C'est bon, il vous reste ${ptVie} point de vie à distribuer, vous pouvez passer à la suite`);
} else {
    alert(`Vos points de vie sont distribués, vous pouvez passer à la suite`);
};


//définition des points d'attaque

let ptAttaque = 100;

alert(`Vous allez maintenant pouvoir leur distribuer ${Math.floor(ptAttaque)} points d'attaque`);

herosArray.forEach(element => {

    do {
        element.attaque = prompt(`Combien de point d'attaque voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${Math.floor(ptAttaque)}/100`);

        if (element.attaque > ptAttaque) {
            alert("Vous n'avez pas suffisamment de points");
        } 
        else if (element.attaque < 0){
            alert("Veuillez entrer un nombre positif");
        }
        else if (isNaN(element.attaque) == true){
            alert("Ceci ne fonctionne pas. Veuillez entrer un nombre, svp");
        };

    } while (element.attaque > ptAttaque || element.attaque < 0 || isNaN(element.attaque) == true); 
    

    ptAttaque -= element.attaque;
               
});


if (ptAttaque !== 0) {
    let ajout = prompt(`Il vous reste ${Math.floor(ptAttaque)} points d'attaque. Choisissez à quel personnage les donner: le guerrier, le mage ou l'archer ?`);

    switch(true){
        case(ajout == "guerrier"):
            guerrier.attaque = (guerrier.attaque*1)+ptAttaque;
            break;

        case(ajout == "mage"):
            mage.attaque = (mage.attaque*1)+ptAttaque;
            break;

        case(ajout == "archer"):
            archer.attaque = (archer.attaque*1)+ptAttaque;
            break;
    };

    ptAttaque = 0;

    alert(`C'est bon, il vous reste ${Math.floor(ptAttaque)} point de vie à distribuer`);
} else {
    alert(`Tous vos points d'attaque sont distribués`);
};

alert(`Vous allez maintenant pouvoir choisir le mode de combat de vos héros`);



// définition du mode

herosArray.forEach(element => {
    do {
        element.mode = prompt(`Sur quel mode voulez-vous mettre votre ${element.poste}, ${element.nom}: normal, defense ou attaque ?`);

        element.modeChoice();

    } while (element.mode !== "normal" && element.mode !== "defense" && element.mode !== "attaque");
});


alert(`Récapitulatif de votre équipe: votre ${guerrier.poste},${guerrier.nom} possède ${Math.floor(guerrier.vie)} points de vie et ${Math.floor(guerrier.attaque)} point d'attaque / votre ${mage.poste},${mage.nom} possède ${Math.floor(mage.vie)} points de vie et ${Math.floor(mage.attaque)} point d'attaque. Ce personnage possède ${Math.floor(mage.mana)} points de mana / votre ${archer.poste},${archer.nom} possède ${Math.floor(archer.vie)} points de vie et ${Math.floor(archer.attaque)} point d'attaque. Ce personnage possède ${Math.floor(archer.fleches)} flèches dans son carquois`);
alert("Vous allez pouvoir débuter la partie !");



//partie

let i = 0;

do {
    i++;

    alert(`C'est parti pour le tour ${i}`);

    herosArray.forEach (element =>{

        if (element.vie > 0) {
            elBoss.vie -= element.attaque;

            if (elBoss.vie > 0){
                alert(`Votre ${element.poste}, ${element.nom}, attaque le boss ${elBoss.nom}`);

                alert(`Votre ${element.poste} a fait mouche! Il ne reste plus que ${Math.floor(elBoss.vie)} points de vie au boss.`);
            } else {
               alert(`Votre ${element.poste} a fait mouche! Il ne reste plus de points de vie au boss.`);

            };
        };
    });


    let random = Math.floor(Math.random()*herosArray.length);

    
    if (elBoss.vie > 0 && herosArray[random].vie > 0){
        herosArray[random].vie -= elBoss.attaque;
        alert(`votre ${herosArray[random].poste}, ${herosArray[random].nom}, a été touché par le boss. Il ne lui reste plus que ${herosArray[random].vie} points de vie`);
    };


    if(herosArray.indexOf(mage) == -1){
        alert(`Votre ${mage.poste} est réinséré pour la partie suivante`);
        herosArray.push(mage);
    };

    if(herosArray.indexOf(archer) == -1){
        alert(`Votre ${archer.poste} est réinséré pour la partie suivante`);
        herosArray.push(archer);
    };



    herosArray.forEach(element => {
        if(element.vie <=0){
            alert(`Votre ${element.poste}, est mort`);

            herosArray.splice(herosArray.indexOf(element),1);
        };
    });


    herosArray.forEach(element => element.competence());

    alert(`Récapitulatif de votre équipe: votre ${guerrier.poste},${guerrier.nom} possède ${Math.floor(guerrier.vie)} points de vie et ${Math.floor(guerrier.attaque)} point d'attaque / votre ${mage.poste},${mage.nom} possède ${mage.vie} points de vie et ${Math.floor(mage.attaque)} point d'attaque. Ce personnage possède ${Math.floor(mage.mana)} points de mana / votre ${archer.poste},${archer.nom} possède ${Math.floor(archer.vie)} points de vie et ${Math.floor(archer.attaque)} point d'attaque. Ce personnage possède ${Math.floor(archer.fleches)} flèches dans son carquois`);
    alert(`Le boss ${elBoss.nom} a ${Math.floor(elBoss.vie)} points de vie.`);


    if (elBoss.vie <= (vieTot_boss*0.2)){
        do {
            askEnigme = prompt(`Vous avez la possibilité de vaincre le boss ${elBoss.poste} en répondant correctement à un énigme. Vous aurez cependant 3 chances de réponse. si vous dépassez ce nombre, c'est vous qui perdrez la partie. Tapez "oui" pour tenter votre chance, tapez "non" pour continuer le court normal de la parite`);


            switch (true){
                case askEnigme == "oui":
                    elBoss.Duel();
                    break;
    
                case askEnigme == "non":
                    alert(`Vous avez décidé de ne pas tenter le tout pour le tout. Vous allez continuer la partie.`);
    
                default:
                    alert(`Veuillez entrer "oui" ou "non"`);
            }
        } while (askEnigme !== "oui" && askEnigme !== "non");
    }

} while ((herosArray.length > 0) && (elBoss.vie > 0));


// issue de la partie 

if(elBoss.vie <= 0){
    alert(`Vous avez vaincu le boss, vous avez gagné la partie !`);
} else if (herosArray.length == 0) {
    alert(`Le boss a vaincu tous vos héros, vous avez perdu la partie`);
}