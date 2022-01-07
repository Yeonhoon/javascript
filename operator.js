// 1. String concatenation
console.log('my' + ' cat');
console.log(`string literals: 1+2 = ${1+2}`)

// 2. Numeric operator

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter; 
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter ++;
// postIncrement = counter ;
// counter = counter + 1;

// 4. Assignment operator

// 5. Comparator operator

// 6. Logical operator: || (OR), && (AND), ! (NOT)
const value = false;
const value2 = 4 < 2;

console.log(`or: ${value || value2 || check()}`);

function check(){
    for (let i=0; i<10; i++){
        return false
    }

}

// 7, Equality
// == loose: 값이 같아야 함.
// === strict : 타입까지 같아야 함.

// 8. Conditional operator: if
const name = 'coder';
if (name === 'jyh'){
    console.log()
}

// tertiary operator:
console.log(name === 'elie' ?'yes':'no');

// 10. switch
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('Bye bye');
    case 'Chrome':
    case 'Firefox':
        console.log('good!');
        break;
    default:
        console.log('same all!');
}

// 11. do-while: do bracket을 우선 실행하고 while 문 검사.
do{
    console.log(`do while: ${i}`)
    i--;
} while (i>0);

