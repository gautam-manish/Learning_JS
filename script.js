// console.log("Manish Gautam");
// console.log("He is very good boy");

// // window.alert("Warning! \nYour PC got hacked");


// // This is the single line comment

// /* 
//     This is 
//     the multi 
//     line 
//     comment
// */

// // A variable is a container for storing data
// // A variable behaves as if it was the value that it contains

// // Two steps:
// // 1. Declaration (var, let, const)
// // 2. Assignment (= assignment operator)
// console.log("Learning about variables")
// console.log("Number Data Type");
// let age;
// age = 20 + 2;
// let a = 21;
// console.log(age); 
// console.log(a);
// console.log("you are", age, "years old")
// console.log("String data type");
// let firstname = "Manish";
// console.log(firstname);
// document.getElementById("myh1").textContent= "My name is Manish Gautam";
// document.getElementById("myp").textContent="I like pizza";
// console.log(`You are ${age} years old`);
// console.log(`The price is Rs ${a}`)
// console.log("The type of age is", typeof age ,"and The type of firstname is", typeof firstname)
// let online = true;
// console.log("The type of variable online is",typeof online)
// console.log("My name is Manish Gautam", online)


// let fullName = "Manish Gautam";
// let age = 20;
// let student = true;

// document.getElementById("myh1").textContent = `Your name is ${fullName}`;
// document.getElementById("myp").textContent = `You are ${age} years old`;


// How to accept user input

// 1. Easy way = Window promt
// 2. Professional way = HTML textbox

// let username;
// username = window.prompt("What is you username");
// console.log(username)


// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myH").textContent = `Hello ${username}`;
// }


// let age = window.prompt("How old are you?");
// age = Number(age);
// console.log(`The data type of age `,typeof age)
// age += 1;
// console.log(age);


// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);

// circumference = 2*PI*radius;
// console.log(circumference);

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value
//     radius = Number(radius);
//     circumference = 2*PI*radius;
//     document.getElementById("circum").textContent = `The cricumference of a given radius is ${circumference} cm`;
// }

// Incrementer and Decrementer
// const decreasebtn = document.getElementById("decreasebtn");
// const resetbtn = document.getElementById("resetbtn");
// const increasebtn = document.getElementById("increasebtn");
// const countlabel = document.getElementById("countlabel");
// let count = 0;

// increasebtn.onclick = function(){
//     count ++;
//     countlabel.textContent = count;
// }

// decreasebtn.onclick = function (){
//     count --;
//     countlabel.textContent = count;
// }

// resetbtn.onclick = function(){
//     count = 0;
//     countlabel.textContent = count;
// }

// Random Number Generator
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() *6)+1;
// let rnum = Math.floor(Math.random()*(max - min))+min;
// console.log(randomNum);
// console.log(rnum);

// const btn = document.getElementById("btn");
// const lbl = document.getElementById("lbl");
// const min = 1;
// const max = 6;
// let randomnumber;

// btn.onclick = function(){
//     randomnumber = Math.floor(Math.random()*(max-min))+min + 1; 
//     lbl.textContent = randomnumber;
// }

// IF STATEMENT

// let ages = document.getElementById("ages");
// let sub = document.getElementById("sub");
// let result = document.getElementById("result");
// let age;
// sub.onclick = function () {
//     age = ages.value;
//     age = Number(age);

//     if (age >= 18) {
// result.textContent = "You can caste a vote"
//     }
//     else {
//         result.textContent = "You can't cast a vote"
//     }
// }

// let age1 = 21;
// let message = age >= 18? "You are an adult" : "You are minor";
// console.log(message);
// let daynum = document.getElementById("daynum");
// let sub = document.getElementById("sub");
// let day;
// sub.onclick = function(){
//     day = daynum.value;
//     day = Number(day);
//     switch (day) {
//         case 1:
//             console.log("It is Sunday");
//             break;
//         case 2:
//             console.log("It is Monday");
//             break;
//         case 3:
//             console.log("It is Tuesday");
//             break;
//         case 4:
//             console.log("It is Wednesday\nIt's you Birthday\nHappy Birthday to you");
//             break;
//         case 5:
//             console.log("It is Thrusday");
//             break; 
//         case 6:
//             console.log("It is Friday");
//             break; 
//         case 7:
//             console.log("It is Saturday");
//             break; 
//         default:
//             console.log(`${day} is not a day`);
//     }
// }
// String Method
// let name = "Manish";
// console.log(name.charAt(3));
// console.log(name.indexOf("i"));
// console.log(name.lastIndexOf("i"))
// console.log(name.length)
// console.log(name.trim())
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.repeat(2))

// let phonenumber = "984-0265628";
// console.log(phonenumber)
// console.log(phonenumber.replaceAll("-",""))
// console.log(phonenumber.replaceAll("-","+"))


// string slicing
// const fullname = "Manish Gautam"

// let firstname = fullname.slice(0, 6);
// let lastname = fullname.slice(7,13);
// console.log(firstname)
// console.log(lastname)

// let firstname = fullname.slice(0, fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" ")+1);
// console.log(firstname)
// console.log(lastname)

// const email = "manishgtm123@gmail.com"
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1);
// console.log(username);
// console.log(extension);


// for(let i=1; i<=5; i++){
//     console.log("Manish Gautam")
// }

// Function = A section of resuable code.
// Declare a function onces, use it whenever you want
// Call the function to execute that code.



function happyBirthday(name, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you dear!");
    console.log("Happy birthday to you darling!");
    console.log(`Happy birthday to you! ${name}`);
    console.log(`Your age is ${age} years`);
}

happyBirthday("Manish", 20);
happyBirthday("Messi", 36);

function add(x, y) {
    let result = x + y;
    console.log(result);
}
add(2, 3);

function function1() {
    let x = 1;
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}
function1();
function2();

// Array

let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Grapes")
// fruits.pop()
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length)
console.log(fruits.indexOf("Mango"));
fruits.sort().reverse();

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.sort().reverse();

// Spread Operators

let number = [1, 2, 3, 4, 5]
let maximum = Math.max(...number)
let minimum = Math.min(...number)
console.log(maximum)
console.log(minimum)

let username = "Manish Gautam";
let letters = [...username].join("+")
console.log(letters)

let fruit = ["banana", "guava", "mama"]
let vegetables = ["cabbage", "tomato", "spanich"]

let food = [...fruit, ...vegetables, "eggs", "milk"]

console.log(food)

console.log("Rest parameters");

function openFridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

const food1 = "pizza"
const food2 = "momo"
const food3 = "burger"
const food4 = "hotdog"

// openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);

console.log(foods);

function sum(...numbers) {
    let res = 0;
    for (let number of numbers) {
        res += number;
    }
    return res;
}

function getAvg(...numbers) {
    let res = 0;
    for (let number of numbers) {
        res += number;
    }
    return res / numbers.length;
}

const total = getAvg(75, 100, 85, 90, 50);
console.log(total)

// Call Back Function 

hello(wait);
// goodbye();

function hello(callback) {
    console.log("Hello");
    callback();
}
function wait() {
    console.log("Wait");
}

function leave() {
    console.log("Leave");
}

function goodbye() {
    console.log("Goodbye");
}

addition(discon, 4, 2)
addition(displayPage, 10, 7)

function addition(callback, x, y) {
    let results = x + y;
    callback(results);
}
function discon(results) {
    console.log(results);
}

function displayPage(results) {
    document.getElementById("myh1").textContent = results;
}

// for each
console.log("For Each Method");

let num = [1, 2, 3, 4, 5];

num.forEach(display);
num.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}
function triple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}
function display(element) {
    console.log(element);
}

let fru = ["apple", "orange", "banana", "coconut"];

fru.forEach(display);

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}
function display(element) {
    console.log(element);
}


// Map ()

const numb = [1, 2, 3, 4, 5];

const squares = numb.map(square);
const cubes = numb.map(cube)
console.log(squares);
console.log(cubes);
function square(element) {
    return Math.pow(element, 2)
}
function cube(element) {
    return Math.pow(element, 3)
}

const students = ["Manish", "Gautam", "Denver", "Nairobi"];
const studentsUpper = students.map(upperCases)
const studentsLower = students.map(lowerCases)

console.log(studentsUpper);
console.log(studentsLower);

function upperCases(element) {
    return element.toUpperCase();
}
function lowerCases(element) {
    return element.toLowerCase();
}

const dates = ["2003-12-03", "2004-12-02"];
const formattedDates = dates.map(formatDates);

console.log(dates)
console.log(formattedDates)

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


// filter method

let numbe = [1, 2, 3, 4, 5, 6, 7];
let evenNum = numbe.filter(isEven);
let oddNum = numbe.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}


const year = [16, 17, 18, 19, 20, 60];
let adults = year.filter(isAdult);
let child = year.filter(isChild);

console.log(adults);
console.log(child);

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}

const words = ["apple", "orange", "cauliflower", "brocauli", "banana", "kiwi", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords)
console.log(longWords)

function getShortWords(element) {
    return element.length <= 6;
}
function getLongWords(element) {
    return element.length > 6;
}

// reduce method
console.log("reduce method")

const prices = [5, 30, 10, 25, 15, 20];

const totals = prices.reduce(sums);

console.log(`$${totals.toFixed(2)}`);

function sums(accumulaor, element) {
    return accumulaor + element;
}

const grades = [75, 50, 90, 80, 65, 95];

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(max);
console.log(min);

function getMax(accumulaor, element) {
    return Math.max(accumulaor, element);
}

function getMin(accumulaor, element) {
    return Math.min(accumulaor, element);
}

// function expression

const namaste = function () {
    console.log("Namaste");
}

namaste();

// setTimeout(function(){
//     console.log("Manish")
// }, 3000);

const abc = [1, 2, 3, 4, 5, 6];
const sq = abc.map(function (element) {
    return Math.pow(element, 2);
})
const evens = abc.filter(function (element) {
    return element % 2 == 0;
})
const odds = abc.filter(function (element) {
    return element % 2 == 1;
})
console.log(evens)
console.log(odds)

console.log(sq)

// Adding numbers of array
const adds = abc.reduce(function (accumulaor, element) {
    return accumulaor + element;
});

console.log(adds)

// arrow functions

const arrow = function () {
    console.log(`arrow`);
}
arrow();

const arrowfun = () => console.log("Manish")
arrowfun();

const arrowname = (names, ageses) => {
    console.log(`Hello ${names}`)
    console.log(`You are ${ageses} years old`)
};

arrowname("Manish", 20);

// setTimeout(() => console.log("Hello"), 3000);

const arr = [1, 2, 3, 4, 5, 6];

const squ = arr.map((element) => Math.pow(element, 2));
const cu = arr.map((element) => Math.pow(element, 2));

console.log(squ)
console.log(cu)

// Object in JS

const person1 = {
    firstName: "Manish",
    lastName: "Gautam",
    age: 23,
    isEmployeed: true,
    sayHello: function () {
        console.log(`Hi I am ${this.firstName}`)
    },
    eat: function () {
        console.log("I am eating a pizza")
    }
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployeed: false,
    sayHello: () => console.log("Hi this is Patrick"),
    eat: () => console.log("I am eating Momo")
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployeed)

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployeed)

person1.sayHello()
person1.eat()

person2.sayHello()
person2.eat()

// this

const per1 = {
    name: "Manish",
    favFood: "Momo",
    sayHello: function () {
        console.log(`Hi I am ${this.name}`)
    },
    eat: () => {
        console.log(`${per1.name} is eating ${per1.favFood}`)
    }
}

const per2 = {
    name: "Gautam",
    favFood: "Pizza",
    sayHello: function () {
        console.log(`Hi I am ${this.name}`)
    },
    eat: () => {
        console.log(`${per2.name} is eating ${per2.favFood}`)
    }
}

per1.sayHello();
per1.eat();
per2.sayHello();
per2.eat();

console.log(this)

// constructor

function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () {
            console.log(`You drive the ${this.make} ${this.model}`)
        }
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Tata", "Nexon", 2022, "Blue");
const car3 = new Car("Lamborgini", "Urus", 2023, "Black")

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log("Another Car...");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log("Another Car...");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();


// Clases
console.log("Classes");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }

    displayPloduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.99);
const product3 = new Product("Underware", 100.00);

product3.displayPloduct();

const totaled = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totaled.toFixed(2)}`);

// Static keyword

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }
    static getcircumference(radius) {
        return 2 * this.PI * radius;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getcircumference(10))
console.log(MathUtil.getArea(10))

class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello() {
        console.log(`Hello, My username is ${this.username}`)
    }
}

const user1 = new User("Manish");
const user2 = new User("Gautam");
const user3 = new User("Sharma");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

console.log(User.userCount)

// Inheritance

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
}

class Fish extends Animal {
    name = "Fish";
}

class Dog extends Animal {
    name = "Dog";
}

const rabbit = new Rabbit();
const fish = new Fish();
const dog = new Dog();


console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
console.log(fish.alive);
fish.eat();
fish.sleep();
console.log(dog.alive);
dog.eat();
dog.sleep();

// Super keyword

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} kmph`)
    }
}
class Rabbits extends Animals {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed);
    }
}
class Fishs extends Animals {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Hwak extends Animals {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed);
    }
}

const rabbits = new Rabbits("Rabbit", 1, 25);
const fishs = new Fishs("Fish", 2, 30);
const hwak = new Hwak("Hwak", 3, 50);

console.log(rabbits.name);
console.log(rabbits.age);
console.log(rabbits.runSpeed);
rabbits.run();
console.log(fishs.name);
console.log(fishs.age);
console.log(fishs.swimSpeed);
fishs.swim();
console.log(hwak.name);
console.log(hwak.age);
console.log(hwak.flySpeed);
hwak.fly();

// Getter and Setter

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth
        }
        else {
            console.error("Width must be a positive number")
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._heigth = newHeight;
        }
        else {
            console.error("Height must be a positive number")
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._heigth;
    }

    get area() {
        return this._heigth * this._width
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(`Area is ${rectangle.area}`);

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number")
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Manish", "Gautam", 20);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// Destructuring

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

const color = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = color;

[color[0], color[4]] = [color[4], color[0]];

console.log(color);
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

function displayPeople({ firstName, lastName, age, job="Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const people1 = {
    firstName: "Manish",
    lastName: "Gautam",
    age: 20,
    job: "Software engineer"
}

const people2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34
}

const { firstName, lastName, age, job } = people1;

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)

displayPeople(people2);


// Nested Object

const peop = {
    fullName: "Manish Gautam",
    age: 20,
    isStudent: true,
    hobbies: ["Karate", "Table Tennis", "Cooking"],
    address: {
        street: "Changathali 07",
        city: "Lalitpur",
        country: "Nepal"
    }
}

console.log(peop.fullName);
console.log(peop.age);
console.log(peop.isStudent);
console.log(peop.hobbies[1]);
console.log(peop.address.city);

for (const property in peop.address){
    console.log(peop.address[property])
}

class People {

    constructor (name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {

    constructor (street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const peop1 = new People("Manish", 20, "Changathali 07", "Lalitpur", "Nepal");
const peop2 = new People("Patrick", 30, "Balkot", "Bhaktapur", "Nepal");
const peop3 = new People("Gautam", 21, "Gauradaha 03", "Jhapa", "Nepal");

console.log(peop1.name);
console.log(peop1.age);
console.log(peop3.address.street);


// Array Of Object 

const fruitss = [{name: "apple", color: "red", calories: 95},{name: "orange", color: "orange", calories: 45},{name: "banana", color: "yellow", calories: 105},{name: "coconut", color: "white", calories: 159},{ name: "pineapple", color: "yellow", calories: 37 }]

console.log(fruitss[0].color)
fruitss.push({name:"grapes",color: "green",  calories: 54})

fruitss.pop()
// fruitss.splice(1, 2)

console.log(fruitss)

fruitss.forEach(fruitss => console.log(fruitss.color))

// ====== map() ======

const fruitNames = fruitss.map(fruitss => fruitss.name);
const fruitColor = fruitss.map(fruitss => fruitss.color);
const fruitCalories = fruitss.map(fruitss => fruitss.calories);
console.log(fruitNames)
console.log(fruitColor)
console.log(fruitCalories)

// ====== filter() ======

const yellowFruits = fruitss.filter(fruitss => fruitss.color === "yellow")
const lowCalFruits = fruitss.filter(fruitss => fruitss.calories < 100);
const highCalFruits = fruitss.filter(fruitss => fruitss.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ====== reduce() ======

const maxFruit = fruitss.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max )

const minFruit = fruitss.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min )

console.log(maxFruit)
console.log(maxFruit.calories)
console.log(minFruit)
console.log(minFruit.calories)


// Sorting

let frui = ["aaple", "orange", "banana", "coconut", "pineapple"];

let numbs = [1, 10, 2, 8, 4, 5, 6]

frui.sort();
numbs.sort((a, b) => b - a);

console.log(frui);
console.log(numbs);

const p = [{name: "Manish", age: 20, gpa:3.0}, {name: "Patrick", age: 18, gpa:1.8}, {name: "Gautam", age: 22, gpa:2.9}, {name: "Fiend", age: 22, gpa: 1.8}]

// p.sort( (a, b) => a.age - b.age);
p.sort( (a, b) => a.name.localeCompare(b.name));

console.log(p)

// Suffle an array

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// cards.sort( () => Math.random() - 0.5);

shuffle(cards)

console.log(cards);

function shuffle(array){
    for(let i = array.length-1; i > 0; i--){
        const randoms = Math.floor(Math.random() * (i + 1));

        [array[i], array[randoms]] = [array[randoms], array[i]]
    }
}


// Dates Objects

const date = new Date(2003, 11, 3, 8, 35, 44,910);

console.log(date);

const years = date.getFullYear();
const month = date.getMonth();
const days = date.getDate()
const hour = date.getHours()
const minutes = date.getMinutes()
const second = date.getSeconds()

console.log(years);
console.log(month);
console.log(days);
console.log(hour);
console.log(minutes);
console.log(second);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy New Year")
}