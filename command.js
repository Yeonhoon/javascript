
function getResult(score){
    return x>5 ?'good' :'bad'
}

function nullishCoalese(text){
    //nullish coalese: ?? 뒤의 부분이 null이거나 undefined 인 경우에
    const msg = text ?? "No Message.";
    console.log(msg)
}

function logicalCoalese(text){
    // falsy인 경우(0, null, undefined, nan, false, '' 등등에 해당하는 경우)
    const result = text || "hihi"
}

// objective destructing
const person = {
    name: 'jyh',
    sex: 'male',
    phone: '01050127795'
}

function showPerson(person){
    const { name, sex, phone } = person
    console.log(name,sex,phone)
}

// spread syntax: 여러 object를 하나로 합침.
// Object 뿐만 아니라 array에도 적용 가능.
const item = {
    type: 'e', size: 'm'
}
const detail = {
    price: 20, madein:'Korea', gender:'M'
}

const shirt0 = Object.assign({}, item, detail)
const shirt1 = {...item, ...detail};
console.log(shirt1)

const fruits = ['strawberry','apple','banana'];
const fruits2 = ['peach','grape','kiwi'];

const merged = [...fruits, ...fruits2];
const merged2 = fruits.concat(fruits2);

console.log(merged, merged2);

// Optional change
// item의 하위 아이템이 있는지.
const person3 = {
    name:'jyh',
    job: {
        title:'Data Scientist'
    }
}

function displaySite(person3){
    const title = person3.job?.title ?? 'Unemployeed.'
    console.log(title)
}

const person2 = {
    name: 'yeonhoon jang',
    age : 28
}

const {name, age} = person2;
console.log(`my name is ${name} and I'm ${age} years old.`)


const items = [1,2,3,4,5,6];
const evens = items.filter(num => num%2===0);
const multiple = evens.map(map => map*4);
const sum = multiple.reduce((a,b)=> a+b, 0);
console.log(sum);

const result = items
    .filter(num => num %2 ===0)
    .map(num => num*4)
    .reduce((a,b)=> a+b,0);
console.log(result);