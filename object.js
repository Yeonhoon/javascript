const obj1 = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'Object constructor' syntax

const yeonhoon = {name:'Jang', age:25};

// Daynamic: runtime에서 동적으로 생성됨.
yeonhoon.job = 'Data Scientist;'
console.log(yeonhoon)

delete yeonhoon.job;
console.log(yeonhoon)

// 2. Computed Properties
console.log(yeonhoon.name);
console.log(yeonhoon['name']); // 실시간으로 원하는 키의 값을 받아오고 싶을때 사용.

function printValue(obj,key){
    console.log(obj[key]) // obj.key는 undefined 
}

// printValue(yeonhoon, 'name');

// 3. Property value shorthand
const person1 = {name:'bob', age: 2};
const person2 = {name:'joe', age:3};
const person3 = new Person('hey',3);
// 동일한 key value 연속 사용 ==> 함수를 이용해

// 4. Constructor function
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator
console.log('name' in yeonhoon);


// 6. for ... in vs for ... of
// yeonhoon 이라는 object의 모든 key를 돌림
for (key in yeonhoon) {
    console.log(key);
}

// for ... of : array의 모든 인자 for 문
const arr1 = [1,2,3,4,5];
for (a of arr1) {
    console.log(a);
}

// 7. function cloning.

const user = {name:'hihi', age: 20};
const user2 = user;

user2.name = 'coder'; //user2는 user 참조 ==> user2가 변경되면 user도 변경됨.
console.log(user);

const user4 = Object.assign({},user);
console.log(user4);

const fruit1 = {color:'red'};
const fruit2 = {color:'blue',size:'big'};
const mixed = Object.assign({},fruit1, fruit2) // 뒤의 것으로 앞의 것을 뒤덮음.

console.log(mixed);
