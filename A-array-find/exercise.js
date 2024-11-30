/* 
  You are given an array of names.
  Write a function called "findLongNameThatStartsWithA" using the .find() method. This function should find the first name in names array that starts with the letter 'A' and is longer than seven letters.
*/

// write your code here

let names = [
  "Vajihe",
  "Alireza",
  "AmirMostafa",
  "AmirMehdi",
  "Alie",
  "Sarah",
  "MohammadHosein",
  "Fatemeh",
  "Mahjan",
];

function  findLongNameThatStartsWithA(params) { 
  return params.find(name => (name.startsWith('A')) && (name.length > 7));} // create the function


let longNameThatStartsWithA =findLongNameThatStartsWithA(names); // call the function

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "AmirMostafa"
