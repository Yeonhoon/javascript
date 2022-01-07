const calcuate = (command,a,b) => {
  if (command === 'add') return a+b
  else if (command === 'substract') return a-b
  else if (command === 'divide') return a/b
  else if (command === 'multiply') return a*b
  else if (command === 'remainder') return a%b
  else throw Error('unknown Command!');
}

const calculate = (command, a, b) => {
    switch(command){
        case 'add': return a + b;
        case 'substract': return a - b;
        case 'divide' : return a / b;
        case 'multiply' : return a * b;
        case 'remainder' : return a % b;
        default : throw Error('unknown Commands!');
    }
}

console.log(calcuate('remainder',5,2))