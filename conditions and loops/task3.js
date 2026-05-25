// Task 3.1

import chalk from "chalk";

console.log(chalk.green('For'));
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Taks 3.2

console.log(chalk.blue('While'));
let multiplier = 1;
const secondNumber = 5;

while (multiplier <= 10) {
    console.log(`${secondNumber} x ${multiplier} = ${secondNumber * multiplier}`);
    multiplier++;

}