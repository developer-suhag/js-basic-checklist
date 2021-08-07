// onlyPositive

const numbers = [23, 45, 65, -5, 76, 89, 99, 50, -30, -50, -20, -5];

function onlyPositive(number) {
    const positiveNumbers = [];

    for (const uniqueNumber of number) {
        if (uniqueNumber < 0) {
            break;
        } else if (uniqueNumber >= 0) {
            positiveNumbers.push(uniqueNumber);
        }
    }
    /* 
    for (let i = 0; i < number.length; i++) {
        const uniqueNumber = number[i];

        if (uniqueNumber < 0) {
            break;
        } else if (uniqueNumber >= 0) {
            positiveNumbers.push(uniqueNumber)
            console.log(uniqueNumber);
        }
    }
     */
    return positiveNumbers;
}

const gotOnlyPositve = onlyPositive(numbers);
console.log('Only Positive Number: ', gotOnlyPositve);