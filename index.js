// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
    console.log(cats);

}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    console.log(cats);
}
function  destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
    
}

function  appendCat(name){
    let name_A = [...cats , "Broom" ];
    return name_A;
}
function  prependCat(name){
    let name_B = ["Arnold" , ...cats];
    return name_B;
}


function removeLastCat(){
    let catsCopy = cats.slice();
    catsCopy.pop();
    return catsCopy;
  }
  
  function removeFirstCat(){
    let catsCopy = cats.slice()
    catsCopy.shift();
    return catsCopy;
     
  }




// destructivelyAppendCat();
// destructivelyPrependCat();
// destructivelyRemoveLastCat();
// destructivelyRemoveFirstCat();
// appendCat("cat");
// prependCat("cat");
// removeLastCat();
// removeFirstcat();