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
class Arme {
  constructor(nom, degats){
    this.nom = nom;
    this.degats = degats;
  }
}
class Sort {
  constructor(name, puissance){
    this.name = name;
    this.puissance = puissance;
  }
}
const monArme = new Arme ("Epée", 100);
const monSort = new Sort ("Foudre", 500);
console.log("Objet Arme :", monArme);
console.log("Objet Sort :", monSort);

class Personnage{
  constructor(nom, santé, force, titre){
    this.nom = nom;
    this.santé = santé;
    this.force = force;
    this.titre = titre;
  }
}
class Guerrier extends Personnage {
  constructor (nom, santé, force, titre, armure){
    super(nom, santé, force, titre);
    this.armure = armure;
  }
}
class Mage extends Personnage {
  constructor(nom, santé, force, titre, mana){
    super(nom, santé, force, titre);
    this.mana = mana;
  }
}
class Tireur extends Personnage{
  constructor(nom, santé, force, titre, precision){
    super(nom, santé, force, titre);
    this.precision = precision;
  }
}
class Assassin extends Personnage{
  constructor(nom, santé, force, titre, discretion){
    super(nom, santé, force, titre);
    this.discretion = discretion;
  }
} 
const ambessa = new Guerrier ("Ambessa", 200, 80, "Matriarche de guerre", 50);
const ahri = new Mage ("Ahri", 150, 60, "Renard à neuf queues", 150);
const akshan = new Tireur ("Akshan", 150, 60, "Sentinelle rebelle", "95%");
const fizz = new Assassin ("Fizz", 100, 70, "Filou des mers", "Espiègle");
console.log("Liste des personnages");
console.table([ambessa, ahri, akshan, fizz]);


