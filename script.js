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

function upperCases (element){
    return element.toUpperCase();
}
function lowerCases (element){
    return element.toLowerCase();
}

const dates = ["2003-12-03" , "2004-12-02"];
const formattedDates = dates.map(formatDates);

console.log(dates)
console.log(formattedDates)

function formatDates (element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


// filter method

let numbe = [1,2,3,4,5,6,7];
let evenNum = numbe.filter(isEven);
let oddNum = numbe.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven (element){
    return element % 2 === 0;
}

function isOdd (element){
    return element % 2 !== 0;
}


const year = [16, 17, 18, 19, 20, 60];
let adults = year.filter(isAdult);
let child = year.filter(isChild);

console.log(adults);
console.log(child);

function isAdult (element){
    return element >= 18;
}

function isChild (element){
    return element < 18;
}

const words = ["apple","orange","cauliflower","brocauli","banana", "kiwi","coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords)
console.log(longWords)

function getShortWords (element){
    return element.length <= 6;
}
function getLongWords (element){
    return element.length > 6;
}

// reduce method
console.log("reduce method")

const prices = [5, 30, 10, 25, 15, 20];

const totals = prices.reduce(sums);

console.log(`$${totals.toFixed(2)}`);

function sums (accumulaor, element){
    return accumulaor + element;
}

const grades = [75, 50, 90, 80, 65, 95];

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(max);
console.log(min);

function getMax(accumulaor, element){
    return Math.max(accumulaor, element);
}

function getMin(accumulaor, element){
    return Math.min(accumulaor, element);
}

// function expression

const namaste = function(){
    console.log("Namaste");
}

namaste();

setTimeout(function(){
    console.log("Manish")
}, 3000);

const abc = [1,2,3,4,5,6];
const sq = abc.map(function (element){
    return Math.pow(element,2);
})
const evens = abc.filter(function(element){
    return element % 2 == 0;
})
const odds = abc.filter(function(element){
    return element % 2 == 1;
})
console.log(evens)
console.log(odds)

console.log(sq)

// Adding numbers of array
const adds = abc.reduce(function(accumulaor, element){
    return accumulaor + element;
});

console.log(adds)