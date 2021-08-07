let stringTypeVariable = 'Hello World!';
let numberTypeVariable = 13;
let booleanTypeVariable = true;

let myLove = 'Mokta';
myLove = 'Allo';

const myName = 'Suhag'

// + - * / %

let number1 = 13;
let number2 = 22;
const addition = number1 + number2;
console.log('Total addition: ', addition);

const subtraction = number2 - number1;
console.log('Total Subtraction: ', subtraction);

const multiplication = number1 * number2;
console.log('Total Multiplication: ', multiplication);

const division = number2 / number1;
console.log('Total division', division);

const remainderModulus = number2 % number1;
console.log('Total remainder: ', remainderModulus);

// condition

if (number1 < number2) {
    console.log('OK');
}
if ((10 < 20 && 20 > 10) || (50 < 100)) {
    console.log('Okay');
}

// while loop 

let i = 7;

while (i <= 19) {

    if (i % 2 != 0) {
        console.log('The Odd Number is:', i);
    }
    i++
}

// array 

const arr = [33, 43, 54, 64, 90, 78, 98];

const arrayLength = arr.length;
console.log('Array length:', arrayLength);

arr[3] = 98;
arr.push(43, 13);
arr.pop();
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    const arrayElement = arr[i]
    console.log('Array Element: ', arrayElement);
}

for (const element of arr) {
    console.log('Array element:- ', element);
}

// object 

let objectionYouHonar = {
    name: 'amok',
    age: 22,
    edu: 'SSC'
};

// objectionYouHonar["edu"] = 'HSC'
// objectionYouHonar.edu = 'Diploma'
let education = "edu";
objectionYouHonar[education] = 'BSC in CSE'

console.log(objectionYouHonar);


// array 

let arrNumber = [32, 89, 90, 45, 88, 45, 65];

for (const number of arrNumber) {
    if (number >= 80) {
        console.log(number);
    }
}

// multiplication with function 

function multiplication3numbers(number1, number2, number3) {
    const result = number1 * number2 * number3;
    return result;
}

const multipy = multiplication3numbers(4, 5, 6);
console.log('Multiplication:- ', multipy);