// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

// const reverseSeq = (n) => {
//   const result = [];
//   for(let i = n; n >=1; i--){
//     result.push(i);
//   }
//   return result;
// };

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);
