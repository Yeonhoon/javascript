// Q1. array에서 string 뽑아내기
const fruits = ['apple','banana','orange'];
let text = " "
const result = fruits.join("-");
console.log(result)

// Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry';
    const temp = [];
    // fruits.forEach(a=>temp.push(a));
    fruits.slice()
    console.log(fruits)
    const result = fruits.split(',')
    console.log(`result: ${result}`)
    
}

// Q3. array 순서 뒤집기
{
    const array = [1,2,3,4,5];
    array.reverse();
    console.log(array)

}
// Q4. array에서 첫번째 두개 요소 없애기
{
    const array = [1,2,3,4,5];
    array.splice(0,2);
    console.log(array)

}

class Student {
    constructor (name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A',29,true, 45),
    new Student('B',25,false, 80),
    new Student('C',24,true, 90),
    new Student('D',23,false, 95),
    new Student('E',28,false, 79),
    new Student('F',27,true, 88),
]

// Q5. 90점 넘는 학생 뽑아내기
{
    const result = students.filter(a=>a.score>=90)
    const result2 = students.find((s,i)=>console.log(`Student: ${s}, Index: ${i}`))
    console.log(result2)
}

// Q6. Enrolled student
{
    const result = students.filter(a=>a.enrolled)
    console.log(result)
}

// Q7. 학생들의 점수만 뽑아내어 array로 만들기
{
    const result = students.map(student => student.score);
    console.log(result);
}

// Q8. 50점 미만 학생들이 있는지 여부 확인. ( 하나라도 조건에 만족되는 경우 true)
{   
    // some: 한명이라도
    // every: 모두
    const result = students.some(a=>a.score<50)
    const result2 = students.every(a=>a.score>50) 
    console.log(result2)
}

// Q9. 학생들의 평균점수 계산
// reduce: current 값이 prev로 감. array에서 loop를 돌면서 return accumulated result.
// reduceRight: 배열의 뒤에서부터 reduce 역순으로
{
   const result = students.reduce((prev, current)=> prev + current.score, 0) // 0: 초기값.
   console.log(result/ students.length)

}

// Q10. 학생들의 모든 점수를 string으로 만들기
{
    const result = students
    .map(a=>a.score)
    .filter(s => s>=50)
    .join();
    // console.log(result)
}

{
    const result = students
    .map(a=>a.score)
    .sort((a,b) => b-a) // b-a : 역순
    // console.log(result)
}

// Object를 array로 요약하기.
{
    const result = students.reduce((prv,current)=>{
        if (!prv) prv = {}
        keys = Object.keys(students[0])
        keys.forEach(i => {
            if (!prv[i]) prv[i]=[]
            prv[i].push(current[i])
        })
        // for (let i of keys){
        //     if (!prv[i]) prv[i]=[]
        //     prv[i].push(current[i])
        // }
        return prv
    },{})
    console.log(result)
}