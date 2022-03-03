"use strict"

// 1. Reverse a string

// function reverseAString(word){
//     let reverseWord = ""
//     for (let i = word.length - 1; i >= 0; i--){
//         reverseWord += word[i];
//     }
//     return reverseWord
// }
// let word = 'basketball'
// let result = reverseAString(word)
// console.log(result);

// 2. Capitalize letter

let myWords = 'kobe bryant';
let myWordsUpper = myWords.split(" ");

for (let i = 0; i < myWordsUpper.length; i++) {
    myWordsUpper[i] = myWordsUpper[i].charAt(0).toUpperCase() + myWordsUpper[i].slice(1);
}

let myNewWords = myWordsUpper.join(" ");
console.log(myNewWords);
