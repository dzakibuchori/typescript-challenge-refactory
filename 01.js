"use strict";
/* PALINDROME */
exports.__esModule = true;
var sentences = "\nibu ratna antar ubi\n\nkasur ini rusak\n\nA nut for a jar of tuna.\n\nBorrow or rob?\n\nWas it a car or a cat I saw?\n\nYo, banana boy!\n\nUFO tofu?\n";
var separate = function (s) { return s.split(/[\s?!]+/).slice(1, -1); };
var arrayTes = separate(sentences);
var palindrome = function (s) { return separate(s).forEach(function (v, i) { return Boolean(v == v.split("").reverse().join("")) ? console.log(v + ' = Palindrome ') : ''; }); };
var reverse = function (s) { return s.split("").reverse().join(""); };
// arrayTes.forEach((v,i) => Boolean(v == v.split("").reverse().join("")) ? console.log(v + ' = Palindrome ') : '');
// console.log(separate(sentences));
console.log('Input : palindrome(sentences)');
console.log('=============================');
console.log('Output : \\/');
palindrome(sentences);
