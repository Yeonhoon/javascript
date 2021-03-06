'use strict';

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits);

// 3. Looping
for (let fruit of fruits){
    console.log(fruit);
}

// forEach
fruits.forEach(fruit => console.log(fruit));

// 4. add, deletion, copy
// push
fruits.push('๐ ','๐');
// pop: ๋ค์์ ๋ง์ง๋ง ๊ฒ์ ์ ๊ฑฐ.
fruits.pop()

// unshift: ์์์๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์
fruits.unshift('๐');

// shift: ์ ์ผ ์์ ์๋ ๋ฐ์ดํฐ ์ ๊ฑฐ

// ** shift, unshift๋ push์ pop๋ณด๋ค ๊ต์ฅํ ๋๋ฆผ.
// splice: ์ง์ ๋ index์ start, end ๊น์ง ์ง์
// start๋ง ์๋ ฅ๋๋ฉด start index ์ดํ์ ๋ชจ๋  ๋ฐ์ดํฐ ์ ๊ฑฐ
// ์ถ๊ฐ๋ก ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ด์ค ์ ์์.
fruits.push('๐');
console.log(fruits);
fruits.splice(1,1, '๐');
console.log(fruits);

const fruits2 = ['๐','๐ญ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
console.clear();
console.log(fruits.indexOf('๐')); // data ์ index, ์์ผ๋ฉด -1 

console.log(fruits.includes('๐')); // data ํฌํจ ์ฌ๋ถ

console.log(fruits.lastIndexOf('๐')) // ๊ฐ์ ๋ฐ์ดํฐ๊ฐ ๋ค์ด์๋ ๊ฒฝ์ฐ ๋งจ ๋ง์ง๋ง index๋ฅผ ์ถ๋ ฅํจ.