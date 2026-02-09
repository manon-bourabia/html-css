// alert(document.getElementById('nom').value + " " + document.getElementById('prenom').value);

document.getElementById("my-bouton").onclick = function direBonjour() {
  alert("Hello !");
};
// -------- Calculatrice
document.getElementById("mon-bouton").onclick = function calculer() {
  let value1 = document.getElementById("premier-nombre").value;
  let value2 = document.getElementById("deuxieme-nombre").value;
  let nombre1 = parseFloat(value1);
  let nombre2 = parseFloat(value2);
  resultat.value = nombre1 + nombre2;
};

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

// ----------FEU TRICOLORE
const redLight = document.getElementById("redLight");
const orangeLight = document.getElementById("orangeLight");
const greenLight = document.getElementById("greenLight");

let change =0;

setInterval(() => {
  redLight.style.backgroundColor = "#ff3a3067";
  orangeLight.style.backgroundColor = "#ff8c0016";
  greenLight.style.backgroundColor = "#4cd9631e";

  if (change === 0){
    redLight.style.backgroundColor = "red"
    change = 1;
  }else if (change === 1){
    orangeLight.style.backgroundColor = "orange"
    change = 2
  } else{ 
    greenLight.style.backgroundColor = "green"
    change = 0
  }
}, 1500);

// ------------- MODALE
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});
const closeModal = () =>{
  modal.classList.remove('active');
};
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click', (event) => {
  if (event.target === modal){
    closeModal();
  }
});