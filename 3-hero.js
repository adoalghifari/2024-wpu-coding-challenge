// WPU Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/solutions/javascript

// function hero(bullets, dragons){
//     if(bullets / 2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function hero(bullets, dragons) {
//     // truthy / falsy
//     return bullets / 2 >= dragons;
// }

// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));