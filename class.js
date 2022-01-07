// 2. Getter and setters


class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age () {
      return this._age;
    }
    set age (value) {
      this._age = value <0 ? 0 : value;
    }
}

// 3. Field (public, private)
class Experiment {
    publicField=2;
    #privateFeild = 0;
}

// 4. Static
// object별로 할당되는 것이 아니라 클래스 자체에 붙어있음.
// object와 관계없이 공통적으로 클래스로 바로 사용하므로 메모리 사용 효율적으로 할 수 있음.
class Article {
    static publisher = 'Dream Coding';
    constructor (articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher)
    }
}

console.log(Article.publisher);
console.log(Article.printPublisher());

// 5. Inheritance (상속)

class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea () {
        this.width * this.height;
    }
}
// Rectangle은 Shape를 상속받기 때문에 Shape의 생성자, 모두 사용 가능
class Rectangle extends Shape {}
class Triangle extends Shape {
    // 필요한 함수만 재정의해서 사용: overriding.
    draw () {
        super.draw(); // super: 부모의 것을 가져와 사용.
    }
    getArea(){
        return (this.width * this.height) / 2;
    } 
}

const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle()