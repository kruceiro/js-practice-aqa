import chalk from 'chalk';

let name = 'Yevhenii';
let age = 29;
let isManualQA = true;
let isAqa = false;

console.log(chalk.blue('Hello, my name is ' + name));
console.log(chalk.white('I am ' + age + ' years old'));
console.log(chalk.yellow('Am I a manual QA? ') + chalk.green(isManualQA));
console.log(chalk.yellow('Am I an automation QA already? ') + chalk.red(isAqa));