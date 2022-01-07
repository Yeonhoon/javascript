// JSON
// JavaScript Object Notation



// 1. Object to JSON: object를 받아와서 string으로 변환함.
let json = JSON.stringify(true)
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name:'tori',
    color:'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json)

json = JSON.stringify(rabbit, ['name','color']) // 원하는 키만 stringfy 가능
json = JSON.stringify(rabbit, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jyh' : value;
})
console.log(json);

// 2. JSON to Object : parse()

const obj = JSON.parse(json);
console.log(obj);

// json을 object로 변환할 때는 함수가 포함되지 않음.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);


