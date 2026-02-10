// alert(document.getElementById('nom').value + " " + document.getElementById('prenom').value);

document.getElementById("my-bouton").onclick = function direBonjour() {
  alert("Hello !");
};
// -------- Calculatrice
// document.getElementById("mon-bouton").onclick = function calculer() {
//   let value1 = document.getElementById("premier-nombre").value;
//   let value2 = document.getElementById("deuxieme-nombre").value;
//   let nombre1 = parseFloat(value1);
//   let nombre2 = parseFloat(value2);
//   resultat.value = nombre1 + nombre2;
// };

//----------EXO AFFICHER CACHER
let element = document.getElementById("second");
element.classList.remove("hidden");

document.getElementById("bouton").onclick = function hidden() {
  let elements = document.getElementsByClassName("spoiler");
  for (let i = 0; i < elements.length; i++) {
    setTimeout(
      function (index) {
        elements[i].classList.add("hidden");
      },
      i * 300,
      i,
    ); // quoi faire et quand le faire
  } // pour sup un à un (i * 300 => efface un index toutes les 300ms) et pas tout d'un coup
};
//-------------EXO SURBRILLANCE
// let elem = document.getElementById('secondText');
// elem.onclick = function(){
//   elem.style.backgroundColor = '#986';
// };
// const paragraphes = document.querySelectorAll('p');
//   paragraphes.forEach(p =>{
//     p.onclick = function(event){
//     event.target.style.backgroundColor = '#986';
//   }
//   });
let paragraphes = document.getElementsByTagName("p");
for (let i = 0; i < paragraphes.length; i++) {
  paragraphes[i].addEventListener("click", function () {
    if (this.style.backgroundColor === "yellow") {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = "yellow";
    }
  });
}

// function changerImage(){
//   let img = document.getElementById('image');
//   // lit l'attribut actuel
//   let srcActuelle = img.getAttribute('src');
//   if (srcActuelle.includes('Chat')){
//     img.setAttribute('src','//image/fleurs.jpg');
//   }else {
//     img.setAttribute('src', '//image/lapin.webp');
//   }
// }
//---------EXO 1 : NOMBRES PAIRS ET IMPAIRS
// function pairImpair(n){
//   if (n%2 === 0){
//     console.log(`${n} est un nombre pair`)
//   }else{
//     console.log(`${n} est un nombre impair`)
//   }
// }
// pairImpair(7);

// function pairImpairTernaire(n){
//   return n %2 === 0;
// }
// console.log(pairImpairTernaire(56));

//----------EXO 2: PALINDROME
// function palindrome(mot){
//   return mot === mot.split("").reverse().join("");
// }
// userWord = prompt("rentrer un mot: ");
// if (palindrome(userWord) === true){
//   alert(`${userWord} n'est pas un palindrome`)

//   palindrome("kayak")
// }

// function palindromeT(mot){
//   return mot === mot.split("").reverse().join("");
// }
// userWordT = prompt("rentrer un mot: ");
// let verification = (palindromeT(userWordT) === true) ? alert(`${userWordT} est un palindrome`): alert(`${userWordT} n'est pas un palindrome`);

// palindrome("kayak")

// ---------- EXO 2 : FEU TRICOLORE
const redLight = document.getElementById("redLight");
const orangeLight = document.getElementById("orangeLight");
const greenLight = document.getElementById("greenLight");

let change = 0;

setInterval(() => {
  redLight.style.backgroundColor = "#ff3a3067";
  orangeLight.style.backgroundColor = "#ff8c0016";
  greenLight.style.backgroundColor = "#4cd9631e";

  if (change === 0) {
    redLight.style.backgroundColor = "red";
    change = 1;
  } else if (change === 1) {
    orangeLight.style.backgroundColor = "orange";
    change = 2;
  } else {
    greenLight.style.backgroundColor = "green";
    change = 0;
  }
}, 1500);

// ------------- EXO 3 : MODALE
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});
const closeModal = () => {
  modal.classList.remove("active");
};
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

//------------EXO 4 CALCULE SOMME
const liste = [52, 10, 25, 32, 19];
// class CalculateurSomme {
//   constructor(nombres) {
//     this.nombres = nombres;
//     this.resultat = 0;
//   }
//   calculer() {
//     this.resultat = this.nombres.reduce(
//       (accumulator, valeur) => accumulator + valeur,
//       0,
//     );
//     return this.resultat;
//   }
//   afficher() {
//     console.log(`La liste est: [${this.nombres}]`);
//     console.log(`Le resultat de la somme est: ${this.resultat}`);
//   }
// }
class CalculateurSomme {
  constructor(nombres) {
    this.nombres = nombres;
    this.resultat = 0;
  }
  calculer() {
    this.resultat = 0;
    for (let i = 0; i < this.nombres.length; i++) {
      this.resultat += this.nombres[i];
    }
    return this.resultat;
  }
  afficher() {
    console.log(`La liste est: [${this.nombres}]`);
    console.log(`Le resultat de la somme est: ${this.resultat}`);
  }
}
const calculateur = new CalculateurSomme(liste);
calculateur.calculer();
calculateur.afficher();

//---------EXO 5: MODULE DE COMBAT
// class Arme {
//   constructor(nom, degats) {
//     this.nom = nom;
//     this.degats = degats;
//   }
// }
// class Sort {
//   constructor(name, puissance) {
//     this.name = name;
//     this.puissance = puissance;
//   }
// }
// const monArme = new Arme("Epée", 100);
// const monSort = new Sort("Foudre", 500);
// console.log("Objet Arme :", monArme);
// console.log("Objet Sort :", monSort);

// class Personnage {
//   constructor(nom, santé, force, titre) {
//     this.nom = nom;
//     this.santé = santé;
//     this.force = force;
//     this.titre = titre;
//   }
// }
// class Guerrier extends Personnage {
//   constructor(nom, santé, force, titre, armure) {
//     super(nom, santé, force, titre);
//     this.armure = armure;
//   }
// }
// class Mage extends Personnage {
//   constructor(nom, santé, force, titre, mana) {
//     super(nom, santé, force, titre);
//     this.mana = mana;
//   }
// }
// class Tireur extends Personnage {
//   constructor(nom, santé, force, titre, precision) {
//     super(nom, santé, force, titre);
//     this.precision = precision;
//   }
// }
// class Assassin extends Personnage {
//   constructor(nom, santé, force, titre, discretion) {
//     super(nom, santé, force, titre);
//     this.discretion = discretion;
//   }
// }
// const ambessa = new Guerrier("Ambessa", 200, 80, "Matriarche de guerre", 50);
// const ahri = new Mage("Ahri", 150, 60, "Renard à neuf queues", 150);
// const akshan = new Tireur("Akshan", 150, 60, "Sentinelle rebelle", "95%");
// const fizz = new Assassin("Fizz", 100, 70, "Filou des mers", "Espiègle");
// console.log("Liste des personnages");
// console.table([ambessa, ahri, akshan, fizz]);

//---------------EXO CORRECTION MODULE DE COMBAT JEREMIE
class Arme {
  constructor(hammer, shield, sword) {
    this.hammer = hammer;
    this.shield = shield;
    this.sword = sword;
  }
  decrire() {
    return ` A ${this.hammer} and a ${this.shield} and a ${this.sword}`;
  }
}
// // class Arme {
// //     constructor(hammer= 'no hammer', shield='no shield', sword='sword') {
// //         this.hammer = hammer;
// //         this.shield = shield;
// //         this.sword = sword;
// //     }
// //     decrire() {
// //         return ` A ${this.hammer} and a ${this.shield} and a ${this.sword}`;
// //     }
// // }
class Sort {
  constructor(firespell, icespell, waterspell, rockrain) {
    this.firespell = firespell;
    this.icespell = icespell;
    this.waterspell = waterspell;
    this.rockrain = rockrain;
  }
  decrire() {
    return `The ${this.firespell} and ${this.icespell} and ${this.waterspell} and ${this.rockrain}`;
  }
}
let weapon1 = new Arme();
console.log(weapon1.decrire());

let weapon2 = new Arme("gros marteau", "grand bouclier");
console.log(weapon2.decrire());

let weapon3 = new Arme("gros marteau", "grand bouclier", "épée magique");
console.log(weapon3.decrire());

/*------------module personnage---JEREMIE------------*/
class Personnage {
  constructor(nom, sante, force, titre) {
    this.nom = nom;
    this.titre = titre;
    this.sante = sante;
    this.force = force;
  }

  decrire() {
    return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
  }
}
class Aventurier extends Personnage {
  constructor(nom, sante, force, xp, titre = "Aventurier") {
    super(nom, sante, force, titre);
    this.xp = xp;
  }

  decrire() {
    return `${super.decrire()} et ${this.xp} points d'expérience`;
  }
}
class Guerrier extends Personnage {
  constructor(nom, sante, force, xp, rage, titre = "Guerrier") {
    super(nom, sante, force, titre);
    this.xp = xp;
    this.rage = rage;
  }
  decrire() {
    return `${super.decrire()} et ${this.xp} points d'expérience et ${this.rage} points de rage`;
  }
}
class Paladin extends Aventurier {
  constructor(nom, sante, force, xp, vertu, titre = "Paladin") {
    super(nom, sante, force, xp, titre);
    this.vertu = vertu;
  }
  decrire() {
    return `${super.decrire()} et ${this.vertu} points de vertu`;
  }
}
class Mage extends Personnage {
  constructor(nom, sante, force, xp, mana, titre = "Mage") {
    super(nom, sante, force, titre);
    this.xp = xp;
    this.mana = mana;
  }
  decrire() {
    return `${super.decrire()} et ${this.xp} points d'expérience et ${this.mana} points de mana`;
  }
}
/*--------------Jeu-JEREMIE--------------*/
//console.log(aventurier.decrire());

const arme = new Arme("hammer", "shield", "sword");
const sort = new Sort("firespell", "icespell", "waterspell", "rockrain");
console.log(arme.decrire());
console.log(sort.decrire());

const perso1 = new Personnage("Jecoq", "Aventurier", 1000, 150, 25);
const aventurier = new Aventurier(perso1, 1000, 150, 25);
console.log({
  nom: aventurier.nom,
  titre: aventurier.titre,
  sante: aventurier.sante,
  force: aventurier.force,
  xp: aventurier.xp,
});

const perso2 = new Personnage("Sigfrid", "Guerrier", 1200, 100, 80, 70);
const guerrier = new Guerrier(perso2, 1200, 100, 80, 70);
console.log({
  nom: guerrier.nom,
  titre: guerrier.titre,
  sante: guerrier.sante,
  force: guerrier.force,
  xp: guerrier.xp,
  rage: guerrier.rage,
});

const perso3 = new Personnage("Galahad", "Paladin", 1000, 100, 60, 50);
const paladin = new Paladin(perso3, 1000, 100, 60, 50);
console.log({
  nom: paladin.nom,
  titre: paladin.titre,
  sante: paladin.sante,
  force: paladin.force,
  xp: paladin.xp,
  vertu: paladin.vertu,
});

const perso4 = new Personnage("Flora", "Mage", 1100, 120, 70, 90);
const mage = new Mage(perso4, 1100, 120, 70, 90);
console.log({
  nom: mage.nom,
  titre: mage.titre,
  sante: mage.sante,
  force: mage.force,
  xp: mage.xp,
  mana: mage.mana,
});
/*----------------------Fin jeux----------------*/
