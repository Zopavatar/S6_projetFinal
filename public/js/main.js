//import perso généraux

import {Perso} from './modules/persos.js';



// imports boss

import {bossArray} from './modules/boss.js';



// import enigmes

import {enigmeArray} from './modules/enigmes.js';



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




console.log(`Bienvenue dans cette nouvelles partie de Geek of Legends ! Votre équipe est constituée de 3 héros, un guerrier / un mage / un archer, qui vont se battre courageusement contre le boss ${elBoss.nom}. Continuez pour nommer les membres de votre équipe`);


// définition du nom des personnages

herosArray.forEach(element =>
    element.nom = "Yves" //prompt(`Donnez un nom à votre ${element.poste}`)
);



// définition point de vie

let ptVie = 600;

console.log(`Vous avez nommé vos personnages ${guerrier.nom}, ${mage.nom} et ${archer.nom}. Vous allez maintenant pouvoir leur distribuer ${ptVie} points de vie`);

herosArray.forEach(element => {

     do {
        element.vie = 200; //prompt(`Combien de point de vie voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${ptVie}/800`);

        if (element.vie > ptVie) {
            console.log("Vous n'avez pas suffisamment de points");
        } 
        else if (element.vie < 0){
            console.log("Veuillez entrer un nombre positif");
        }
        else if (isNaN(element.vie) == true){
            console.log("Ceci ne fonctionne pas. Veuillez entrer un nombre, svp");
        };

    } while (element.vie > ptVie || element.vie < 0 || isNaN(element.vie) == true); 
    

    ptVie -= element.vie;
});

if (ptVie !== 0) {
    let ajout = "archer"; //prompt(`Il vous reste ${ptVie} points de vie. Choisissez à quel personnage les donner: le guerrier, le mage ou l'archer ?`);

    switch(true){
        case(ajout == "guerrier"):
            guerrier.vie += ptVie;
            break;

        case(ajout == "mage"):
            mage.vie += ptVie;
            break;

        case(ajout == "archer"):
            archer.vie += ptVie;
            break;
    };

    ptVie = 0;

    console.log(`C'est bon, il vous reste ${ptVie} point de vie à distribuer, vous pouvez passer à la suite`);
} else {
    console.log(`Vos points de vie sont distribués, vous pouvez passer à la suite`);
};



//définition des points d'attaque

let ptAttaque = 90;

console.log(`Vous allez maintenant pouvoir leur distribuer ${ptAttaque} points d'attaque`);

herosArray.forEach(element => {

    do {
        element.attaque = 30; //prompt(`Combien de point d'attaque voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${ptAttaque}/800`);

        if (element.attaque > ptAttaque) {
            console.log("Vous n'avez pas suffisamment de points");
        } 
        else if (element.attaque < 0){
            console.log("Veuillez entrer un nombre positif");
        }
        else if (isNaN(element.attaque) == true){
            console.log("Ceci ne fonctionne pas. Veuillez entrer un nombre, svp");
        };

    } while (element.attaque > ptAttaque || element.attaque < 0 || isNaN(element.attaque) == true); 
    

    ptAttaque -= element.attaque;
               
});


if (ptAttaque !== 0) {
    let ajout = "guerrier"; //prompt(`Il vous reste ${ptAttaque} points d'attaque. Choisissez à quel personnage les donner: le guerrier, le mage ou l'archer ?`);

    switch(true){
        case(ajout == "guerrier"):
            guerrier.attaque += ptAttaque;
            break;

        case(ajout == "mage"):
            mage.attaque += ptAttaque;
            break;

        case(ajout == "archer"):
            archer.attaque += ptAttaque;
            break;
    };

    console.log(`C'est bon, il vous reste ${ptAttaque} point de vie à distribuer`);
} else {
    console.log(`Tous vos points d'attaque sont distribuésL`);
};

console.log(`Vous allez maintenant pouvoir choisir le mode de combat de vos héros`);



// définition du mode

herosArray.forEach(element => {
    element.mode = "attaque"; //prompt(`Sur quel mode voulez-vous mettre votre ${element.nom}: defense ou attaque ?`);

    element.modeChoice();
});


console.log(`Récapitulatif de votre équipe: votre ${guerrier.poste},${guerrier.nom} possède ${guerrier.vie} points de vie et ${guerrier.attaque} point d'attaque / votre ${mage.poste},${mage.nom} possède ${mage.vie} points de vie et ${mage.attaque} point d'attaque. Ce personnage possède ${mage.mana} points de mana / votre ${archer.poste},${archer.nom} possède ${archer.vie} points de vie et ${archer.attaque} point d'attaque. Ce personnage possède ${archer.fleches} flèches dans son carquois`);
console.log("Vous allez pouvoir débuter la partie !");



//partie

let i = 0;

do {
    i++;

    console.log(`C'est parti pour le tour ${i}`);

    herosArray.forEach (element =>{

        if (element.vie > 0) {
            elBoss.vie -= element.attaque;

            if (elBoss.vie > 0){
                console.log(`Votre ${element.poste}, ${element.nom}, attaque le boss ${elBoss.nom}`);

                console.log(`Votre ${element.poste} a fait mouche! Il ne reste plus que ${elBoss.vie} points de vie au boss.`);
            } else {
                console.log(`Votre ${element.poste} a fait mouche! Il ne reste plus de points de vie au boss.`);

            };
        };
    });


    let random = Math.floor(Math.random()*herosArray.length);

    
    if (elBoss.vie > 0 && herosArray[random].vie > 0){
        herosArray[random].vie -= elBoss.attaque;
        console.log(`votre ${herosArray[random].poste}, ${herosArray[random].nom}, a été touché par le boss. Il ne lui reste plus que ${herosArray[random].vie} points de vie`);
    };


    console.log(`La rage de votre ${guerrier.poste} est à ${guerrier.rage} points. Votre ${archer.poste} possède ${archer.fleches}. Votre ${mage.poste} possède ${mage.mana}`);



    if(herosArray.indexOf(mage) == -1){
        console.log(`Votre ${mage.poste} est réinséré pour la partie suivante`);
        herosArray.push(mage);
    };

    if(herosArray.indexOf(guerrier) == -1){
        console.log(`Votre ${guerrier.poste} est réinséré pour la partie suivante`);
        herosArray.push(guerrier);
    };



    herosArray.forEach(element => {
        if(element.vie <=0){
            console.log(`Votre ${element.poste}, est mort`);

            herosArray.splice(herosArray.indexOf(element),1);
            console.log(herosArray);
        };
    });

    herosArray.forEach(element => element.competence());

    if (elBoss.vie <= (vieTot_boss*0.2)){
        elBoss.Duel();
    }

} while ((herosArray.length > 0) && (elBoss.vie > 0));


// issue de la partie 

if(elBoss.vie <= 0){
        console.log(`Vous avez vaincu le boss, vous avez gagné la partie !`);
} else if (herosArray.length == 0) {
    console.log(`Le boss a vaincu tous vos héros, vous avez perdu la partie`);
}