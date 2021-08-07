// feetToInch
function feetToInch(feet) {
    const toInches = feet * 12;
    return toInches;
}

let feets = 5.95;
const inchesValue = Math.round(parseInt(feetToInch(feets)));

console.log('Total Inches is :-', inchesValue);