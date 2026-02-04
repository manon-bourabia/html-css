// alert(document.getElementById('nom').value + " " + document.getElementById('prenom').value);

document.getElementById("my-bouton").onclick = function direBonjour() {
  alert("Hello !");
};
// Calculatrice
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
//     img.setAttribute('src','image/');
//   }else {
//     img.setAttribute('src', 'image/');
//   }
// }

