let js = "amazing";
//if(js === "amazing") alert("JavaScript is FUN!")
console.log(40 + 23 + 12 - 34);

console.log('Samet');
console.log(24);

let firstName = "Samet";
let lastName = "Bayram";
let age = 24;
let birthYear = 1999;

console.log(firstName);
console.log(firstName + " " + lastName);
console.log(age + birthYear);
console.log(2024 - birthYear);

//let 3years = 3; This code has a syntax error.
// & tanımlarda kullanılamaz.
//reserved words doesn't useable after let

let PI = 3.141596;
//This section is more understandable
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teachler';
// This section is not understandable yet.
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let country = 'Turkiye';
let continent = 'Asia';
let population = 85000000;

console.log(country + " " + continent + " " + population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 24);
//console.log(typeof 'Samet');

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// Değişebilir Değişkenler için let kullanılır.
let age = 30;
age = 31;
// Değişemeyen değişkenler için const kullanılır.
const birthYear = 1991;
// birthYear = 1990;

// Eğer bir değer ileride değişecekse let kullanın. 
// Aksi durumlarda const kullanmak daha olasıdır.

// const job;
// Never use var!
var job = 'Programmer';
job = 'teacher';
// This is also wrong way.
lastName = 'Bayram';
console.log(lastName);

// Math Operators
const now = 2091;
const ageSamet = now - 1999;
const ageSarah = now - 2018;
console.log(ageSamet, ageSarah);

console.log(ageSamet * 2, ageSamet / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Samet';
const lastName = 'Bayram';
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators

console.log(ageSamet > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 74);

const isFullAge = ageSarah >= 74;

console.log(now - 1999 > now - 2018);


const now = 2091;
const ageSamet = now - 1999;
const ageSarah = now - 2018;

console.log(now - 1999 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
const averageAge = (ageSamet + ageSarah) / 2
console.log(ageSamet, ageSarah, averageAge);

const firstName = 'Samet';
const job = 'Junior Software Developer';
const birthYear = 1999;
const year = 2024

const samet = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";

console.log(samet);

const sametNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(sametNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
// Eğer `(AltGR + Virgül Butonu) işareti kullanırsanız \n\ yazmanıza gerek kalmaz. Temiz Kod olur.
console.log(`String
multiple
lines`);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license❤️')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😍`);
}


const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);