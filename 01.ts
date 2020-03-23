/* PALINDROME */

export {}

const sentences: string = `
ibu ratna antar ubi

kasur ini rusak

A nut for a jar of tuna.

Borrow or rob?

Was it a car or a cat I saw?

Yo, banana boy!

UFO tofu?
`;

let separate = s => s.split(/[\s?!]+/).slice(1,-1);
let arrayTes: string[] = separate(sentences);
let palindrome = s => separate(s).forEach((v,i) => Boolean(v == v.split("").reverse().join("")) ? console.log(v + ' = Palindrome ') : '');


let reverse = s => s.split("").reverse().join("");
console.log('Input : palindrome(sentences)');
console.log('=============================');
console.log('Output : \\/');
palindrome(sentences);

/** OUTPUT
  Input : palindrome(sentences)
  =============================
  Output : \/
  ini = Palindrome
  A = Palindrome
  a = Palindrome
  a = Palindrome
  a = Palindrome
  I = Palindrome
*/