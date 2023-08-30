#!usr/bin/env node 


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () =>{
    return new Promise ((res)=>{
        setTimeout(res,2000);

    })

}

async function Welcome() {
  let Karaokeanimation = chalkAnimation.karaoke('Lets start calculation');  //start
  await sleep();
  Karaokeanimation.stop();
  console.log(`
  ____________________
|  _________________  |
| |                 | |
| |                 | |
| |                 | |
| |                 | |
| |_________________| |
|  ___  ___  ___  ___  |
| | 7 || 8 || 9 || + | |
| |___||___||___||___| |
| | 4 || 5 || 6 || - | |
| |___||___||___||___| |
| | 1 || 2 || 3 || * | |
| |___||___||___||___| |
| | . || 0 || = || / | |
| |___||___||___||___| |
|_____________________||
 `);
 
}

await Welcome();
 

async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },

        {
            type: "number",
            name: "num1",
            message: "Enter First Number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number:",
        },
    ]);

    const operatorLowerCase = answer.operator.toLowerCase(); // Convert input to lowercase

    if 
    (operatorLowerCase === "addition") {
        console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    } else if
     (operatorLowerCase === "subtraction") {
        console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    } else if
     (operatorLowerCase === "multiplication") {
        console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    } else if 
    (operatorLowerCase === "division") {
        console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
}







// askQuestion();

async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({

            type : "input",
            name : "restart",
            message : "Do you want to continue? Press y or no:"
        })

    }while (again.restart == 'y' || again.restart == 'Y' || again.restart == "yes" || again.restart == "Yes")
    
}
startAgain();