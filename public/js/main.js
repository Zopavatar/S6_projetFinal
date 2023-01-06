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
archer.fleches = flechesArray[flechesAleat];
mage.mana = manaArray[manaAleat];

alert(`Bienvenue dans cette nouvelles partie de Geek of Legends ! Votre équipe est constituée de 3 héros, un guerrier / un mage / un archer, qui vont se battre courageusement contre le boss ${elBoss.nom}. Continuez pour nommer les membres de votre équipe`);

herosArray.forEach(element =>
    element.nom = prompt(`Donnez un nom à votre ${element.poste}`)
);





let ptVie = 1000;

alert (`Vous avez nommé vos personnages ${guerrier.nom}, ${mage.nom} et ${archer.nom}. Vous allez maintenant pouvoir leur distribuer ${ptVie} points de vie`);

herosArray.forEach(element => {
    element.vie = prompt(`Combien de point de vie voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${ptVie}/1000`);
    ptVie -= element.vie;
});


if (ptVie !== 0) {
    let ajout = prompt(`Il vous reste ${ptVie} points de vie. Choisissez à quel personnage les donner: le guerrier, le mage ou l'archer ?`);

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
    }

    ptVie = 0;

    alert(`C'est bon, il vous reste ${ptVie} point de vie à distribuer, vous pouvez passer à la suite`);
} else {
    alert (`Vos points de vie sont distribués, vous pouvez passer à la suite`);
}





let ptAttaque = 800;

alert (`Vous allez maintenant pouvoir leur distribuer ${ptAttaque} points d'attaque`);

herosArray.forEach(element => {
    element.attaque = prompt(`Combien de point d'attaque voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${ptAttaque}/800`);
    ptAttaque -= element.attaque;

    if(element.attaque !== "number"){
        alert(`Ceci ne fonctionne pas, veuillez introduire un nombre`);
        element.attaque = prompt(`Combien de point d'attaque voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${ptAttaque}/800`);
    } else if (element.attaque > ptAttaque){
        alerte(`Vous n'avez pas suffisamment de points restants`);
        element.attaque = prompt(`Combien de point d'attaque voulez-vous donner à ${element.nom}, votre ${element.poste} ? Il vous en reste ${ptAttaque}/800`);
    }
               
});


if (ptAttaque !== 0) {
    let ajout = prompt(`Il vous reste ${ptAttaque} points d'attaque. Choisissez à quel personnage les donner: le guerrier, le mage ou l'archer ?`);

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
    }

    alert(`C'est bon, il vous reste ${ptAttaque} point de vie à distribuer`);
} else {
    alert (`Vos points d'attaque sont distribués, vous allez pouvoir débuter la partie`);
}


alert (`Récapitulatif de votre équipe: votre ${guerrier.poste},${guerrier.nom} possède ${guerrier.vie} points de vie et ${guerrier.attaque} point d'attaque / votre ${mage.poste},${mage.nom} possède ${mage.vie} points de vie et ${mage.attaque} point d'attaque. Ce personnage possède ${mage.mana} points de mana / votre ${archer.poste},${archer.nom} possède ${archer.vie} points de vie et ${archer.attaque} point d'attaque. Ce personnage possède ${archer.fleches} flèches dans son carquois`);
alert(`Vous allez maintenant pouvoir choisir le mode de combat de vos héros`);



herosArray.forEach(element => {
    element.mode = prompt(`Sur quel mode voulez-vous mettre votre ${element.nom}: defense ou attaque ?`);
    
    switch(true){
        case element.mode == "attaque":
            element.attaque *= 1.4;
            element.vie *= 0.75;

            alert(`votre ${element.poste} est en mode ${element.mode}. Il possède un quart de ses point de vie en moins (${element.vie}),mais ses points d'attaque augmentent de deux cinquième (${element.attaque})`);
            break;

        case element.mode == "defense":
            element.attaque *= 0.5;
            element.vie *= 2.5;

            herosArray.push(element);

            alert(`votre ${element.poste} est en mode ${element.mode}. Il possède seulement la moitié de ses points d'attaque (${element.vie}), mais ses points de vie augment de 2 fois et demi (${element.vie}) `);
            break;

        case element.mode == "normal":
            alert(`votre ${element.poste} est en mode ${element.mode}.`);
            break;

        default:
            alert(`Ceci ne fonctionne pas, veuillez introduire un mode`);
            element.mode = prompt(`Sur quel mode voulez-vous mettre votre ${element.nom}: defense ou attaque ?`);
    }

});




//partie

let i = 0;

do {

    i++;

    alert(`C'est parti pour le tour numéro ${i} !`);

    herosArray.forEach(element => {
      alert(`${element.nom}, le ${element.poste}, attaque le boss ${elBoss.nom}`);

      element.competence();
      elBoss.vie -= element.attaque;

      alert(`${elBoss} a été touché, ses points de vie ne sont plus que de ${elBoss.vie}. Votre ${element.poste}, ${element.nom}, a fait mouche.`);
    });


    let heroPif = Math.floor(Math.random()*herosArray.length);

    herosArray[heroPif].vie -= elBoss.attaque;
    alert(`Votre ${herosArray[heroPif].poste} a été touché par ${elBoss.nom}!`)


    if(herosArray[heroPif].vie <= 0){
        herosArray.splice(herosArray[heroPif],1);
        alert(`Votre ${herosArray[heroPif].poste} est mort !`);
    }

    alert (`Récapitulatif de votre équipe: votre ${guerrier.poste},${guerrier.nom} possède ${guerrier.vie} points de vie et ${guerrier.attaque} point d'attaque / votre ${mage.poste},${mage.nom} possède ${mage.vie} points de vie et ${mage.attaque} point d'attaque. Ce personnage possède ${mage.mana} points de mana / votre ${archer.poste},${archer.nom} possède ${archer.vie} points de vie et ${archer.attaque} point d'attaque. Ce personnage possède ${archer.fleches} flèches dans son carquois`);

} while (elBoss.vie > 0 || guerrier.vie <= 0 && archer.vie <= 0 && mage.vie <= 0);


switch (true) {
    case elBoss.vie <= 0:
        alert(`Vous avez gagné la bataille, ${elBoss.nom} est mort !`);
    case guerrier.vie <= 0  && archer.vie <= 0 && mage.vie <= 0:
        alert(`Vous avez perdu la bataille, tous vos héros sont morts !`);
}