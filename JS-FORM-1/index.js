// alert(document.getElementById('nom').value + " " + document.getElementById('prenom').value);

document.getElementById('my-bouton').onclick = function direBonjour(){
  alert('Hello !');
}
// Calculatrice
document.getElementById('mon-bouton').onclick = function calculer(){
    let value1 = document.getElementById('premier-nombre').value;
    let value2 = document.getElementById('deuxieme-nombre').value;
    let nombre1 = parseFloat(value1);
    let nombre2 = parseFloat(value2);
    resultat.value = nombre1 + nombre2; 
}
