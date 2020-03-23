/* COMBINE SEVERAL ARRAYS */

export {}

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

let combine = (...ar) => {
  let c: string = '';
  ar.forEach((v,i) => c += v.join(" ") + " ");
  console.log(c);
} 

console.log('Input : combine(first,second,third)');
console.log('=============================');
console.log('Output : \\/');
combine(first,second,third);

/** OUTPUT
  Input : combine(first,second,third)
  =============================
  Output : \/
  Behind every great man is a woman rolling her eyes
*/