'use strict';

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);

// 3. Looping
for (let fruit of fruits){
    console.log(fruit);
}

// forEach
fruits.forEach(fruit => console.log(fruit));

// 4. add, deletion, copy
// push
fruits.push('🟠','🍑');
// pop: 뒤에서 마지막 것을 제거.
fruits.pop()

// unshift: 앞에서부터 데이터를 넣음
fruits.unshift('🍓');

// shift: 제일 앞에 있는 데이터 제거

// ** shift, unshift는 push와 pop보다 굉장히 느림.
// splice: 지정된 index의 start, end 까지 지움
// start만 입력되면 start index 이후의 모든 데이터 제거
// 추가로 원하는 데이터를 넣어줄 수 있음.
fruits.push('🍇');
console.log(fruits);
fruits.splice(1,1, '🍉');
console.log(fruits);

const fruits2 = ['🍋','🍭'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
console.clear();
console.log(fruits.indexOf('🍎')); // data 의 index, 없으면 -1 

console.log(fruits.includes('🍓')); // data 포함 여부

console.log(fruits.lastIndexOf('🍌')) // 같은 데이터가 들어있는 경우 맨 마지막 index를 출력함.