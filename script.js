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

// type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear); // String olan 1999 sayıya dönüştürülür. Sonraki satırlara etki etmez.
console.log(inputYear + 25); // 199925. 1999 aslında string bir ifade.
console.log(Number(inputYear) + 25); // 1999+25

console.log(Number('Samet')); // Sayı olmaan string öğeler NaN olarak çevirilir.
console.log(typeof NaN); // NaN = number

console.log(String(23), 23); // 23 Artık string bir ifadedir ve 4 işlem yapılamaz.

// type coercion
console.log('I am ' + 24 + ' years old');
console.log('I am ' + String(24) + ' years old');
console.log('23' - '10' - 3); // 10, JavaScript Otomatik dönüşümleri yapar. + işaretinde String kabul eder - işaretinde number
console.log('23' * '2'); // aynı şekilde bölme ve çarpma işleminde de sayı olan string ifade sayı olarak kabul edilir.

let n = '1' + 1;
n = n - 1;
console.log(n); // 10, çünkü toplama işleminde string sayı ile normal sayı yan yana yazılır.


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Samet'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0.01;
if (money) {
    console.log("don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 1.87
if (height) {
    console.log('YAY! Heighy is defined');
} else {
    console.log('Height is UNDEFINED');
}


const age = '18';

if (age === 18) console.log('You should became an adult. (Strict)');
if (age == 18) console.log('You should became an adult. (loose)');
// == Tip zorlaması yapar ve içerideki ifadeye bakar, === tip zorlaması yapmaz.

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof (favourite));//String bir ifadedir.

/* if (favorite == 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!');
} 
// === is blocked this javascript version. Only == working.
if (favourite == 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite == 7) {
    console.log('7 is also cool number.');
} else if (favourite == 9) {
    console.log('9 is also a cool number.');
} else {
    console.log('Number is not 23 or 7.');
}

if (favourite != 23) console.log('Why not 23?'); // also !== not working 2024
