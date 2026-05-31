// 1
// Створіть клас Person, що містить властивості
// firstName та lastName.
// Додайте метод getFullName(), який повертає
// повне ім'я у форматі "firstName lastName".
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    getFullName(){
    return `firstname ${this.firstname} lastname ${this.lastname}`
    }
}
const person1 = new Person('John', 'Doe');
console.log(person1.getFullName()); // John Doe


// 2
// Створіть клас Rectangle, що містить властивості
// width та height.
// Додайте метод getArea(), який повертає площу прямокутника.
class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
}
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); // 50