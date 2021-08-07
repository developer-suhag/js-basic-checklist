// centimeterToMeter

function centimeterToMeter(centimeter) {
    const toMeter = centimeter / 100;
    return toMeter;
}

let centimeters = 5000;
const inMeter = centimeterToMeter(centimeters);

console.log('Total Meter is :-', inMeter);