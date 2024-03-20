#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "Write your guess between 1 to 10:  ",
  },
]);

const { userGuess } = answer;

console.log(userGuess, "userGuess", systemGeneratedNo, "genetratedNumber");

if (userGuess === systemGeneratedNo) {
  console.log(chalk.green("You WON The Game."));
} else {
  console.log(chalk.red("Better Luck Next Time"));
}
console.log("The End");
