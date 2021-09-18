// Write your solution here!

const cats = ["Milo", "Otis","Garfield"];
// is assigned an initial value of ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}
// appends a cat to the end of the cats array

function destructivelyPrependCat(name){
    cats.unshift(name);
}
// prepends a cat to the beginning of the cats array

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
//  removes the last cat from the cats array

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
// removes the first cat from the cats array

function appendCat(name){
    const appendedCat = [...cats, name];
    return appendedCat;
}
// appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function prependCat(name){
    const prependedCat = [name, ...cats];
    return prependedCat;
}
// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat(){
    return cats.slice(0,-1);
}
// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat(){
    return cats.slice(1);
}
// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged