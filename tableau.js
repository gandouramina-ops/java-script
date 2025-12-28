const myArray = ["banane", "pomme", "cerise", "poire", 4];
console.log(myArray, "mon premier tableau");

const cars = new Array("renaud", "peugeot", "BMW");
console.log(cars, "mon deuxieme tableau");

console.log("la longueur de mon tableau", myArray.length);
console.log(myArray[0]);

myArray[0] = "Fraise";
console.log(myArray[0]);

console.log(myArray.toString());

const nombre = [2, 3, 4];
const nouveauTab=[1,...nombre,5]  //les 3 points : spread operator elle permet d'afficher une copie du tableau 
console.log(nouveauTab);

console.log(myArray.join('/')); //join permet de joindre les éléments du tableau avec l'opérateur choisis

let voiture=cars.pop(); //pop() permet de supprimer le dernier élément du tableau
console.log(voiture);
console.log(cars);

let fruit=myArray.push('kiwi'); //push() permet d'ajouter un élement au tableau
console.log(myArray);

const boys=["Amine","Hamid","rayan"]
const girls=["manel","aya","khalida"]
const children=boys.concat(girls)
console.log(children);


const semaine=["Lun","Mra","Mer","Jeu","Ven","Sam","Ddi"]
//exo1: supprimer le dernier élement du tableau
semaine.pop();
//exo2 : ajouter dim à la fin du tableau 
semaine.push('Dim');
//exo3 : remplacer mra par mar 
semaine[1]="Mar"
//exo4 : Afficher la valeur du tableau
console.log(semaine);
console.log(semaine.length);

const x=["banane","orange","pomme","mongue"]
console.log(x);

x.splice(2,0,"citron","kiwi") //splice permet d'ajouter et de supprimer , le premier parametre(2) indique à quel index ajouter les élements et au premier parametre(0) c'est le nombre d'element à supprimer 
console.log(x);
x.splice(2,1)
console.log(x);

const y=["fraise","pastèque","poire","mandarine"]
const sliceY=y.slice(2)// il permet de récuperer les element à partir du ième élement (2)
console.log(sliceY);

const z=["fraise","pastèque","poire","mandarine"]
const sliceZ=z.slice(1,2)
console.log(z);
console.log(sliceZ);














