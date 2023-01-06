//import perso généraux

import {Perso} from './modules/persos.js';



// imports boss

import {bossArray} from './modules/boss.js';



// import enigmes

import {enigmeArray} from './modules/enigmes.js';



//import heros

import {herosArray} from './modules/heros.js'

import {guerrier} from './modules/heros.js'
import {mage} from './modules/heros.js'
import {archer} from './modules/heros.js'



//initialisation de partie


let elBoss = bossArray[Math.floor(Math.random()*bossArray.length)];
console.log(elBoss)

alert(`Bienvenue dans cette nouvelles partie de Geek of Legends ! Votre équipe est constituée de 3 héros, un guerrier / un mage / un archer, qui vont se battre courageusement contre le boss ${elBoss.nom}. Continuez pour nommer les membres de votre équipe`);

guerrier.nom = prompt(`Donnez un nom à votre guerrier`);
mage.nom = prompt(`Donnez un nom à votre mage`);
archer.nom = prompt(`Donnez un nom à votre archer`);


let ptVie = 1000;

alert (`Vous avez nommé vos personnages ${guerrier.nom}, ${mage.nom} et ${archer.nom}. Vous allez maintenant pouvoir leur distribuer ${ptVie}/${ptVie}`);



