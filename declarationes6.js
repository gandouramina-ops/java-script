//var est de scope fonction sa valeur peut être reassignable
function exempleVar() {
  var x = 5;
  if (true) {
    var x = 10;
    console.log(x, "La valeur de x à l'intérieur de la condition");
  }
  console.log(x, "La valeur de x à l'extérieur de la condition");
}
exempleVar();
//let est de scope bloc sa valeur peut être reassignable
function exempleLet() {
  let y = 5;
  if (true) {
    let y = 10;
    console.log(y, "La valeur de y à l'intérieur de la condition");
  }
  console.log(y, "La valeur de y à l'extérieur de la condition");
}
exempleLet();
//const est de scope bloc et constante sa valeur n'est pas reassignable
function exempleConst(){
    const z=5;
    console.log(z);
}
exempleConst()
