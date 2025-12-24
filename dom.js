const titre = document.getElementsByClassName("title");
console.log(titre, "la récupération de l'élément via sa classe name");

const demo = document.getElementById("demo");
console.log(demo, "La récupération de l'élément via son Id");

//modifier la couleur des elements ayant l'id demo
demo.style.color = "pink";

//demo.innerHTML='Texte Modifié Via JavaScript'

//demo.innerText = "Texte Modifié Via JavaScript";

/*avec innerText on peut modifier uniquement le contenu de la balise 
par contre avec innerHtml on peut modifier Meme la balise*/

demo.innerHTML = "<h1>Texte et balise Modifiés Via JavaScript</h1>";

const p = document.getElementsByTagName("p");
console.log(p, "La récupération de l'élément via son tag( la balise )");

//querySelector récupérer un element selon une classe une balise un id un type etc ..
const mySelector = document.querySelector("#listeLivre li:nth-child(2) .name");
console.log(mySelector,"la récupération de l'élément via querySelector");

const booklist=document.querySelectorAll('#listeLivre .name');
console.log(booklist,"la récupération de l'élément via query selector all");



