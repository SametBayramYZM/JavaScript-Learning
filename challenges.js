// Coding Challenge #1

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

// Coding Challenge #2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark < BMIJohn) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}

// Coding Challenge #3
