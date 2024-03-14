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



function happyBirthday(name, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you dear!");
    console.log("Happy birthday to you darling!");
    console.log(`Happy birthday to you! ${name}`);
    console.log(`Your age is ${age} years`);
}

happyBirthday("Manish",20);
happyBirthday("Messi",36);

function add(x,y){
    let result = x+y;
    console.log(result);
}
add(2,3);

function function1 (){
    let x = 1;
    console.log(x);
}

function function2 (){
    let x = 2;
    console.log(x);
}
function1();
function2();

// Array

let fruits = ["Apple","Banana","Mango"];
fruits.push("Grapes")
// fruits.pop()
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length)
console.log(fruits.indexOf("Mango"));
fruits.sort().reverse();

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
fruits.sort().reverse();