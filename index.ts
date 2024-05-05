#! /usr/bin/env node
import inquirer from "inquirer";

// Generating random numbers
let randomNumber = Math.floor(Math.random()*6 +1);
console.log(randomNumber)

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please guess a number between 1-6:"

    }
])
if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulation! You guessed right")
}else{
    console.log("You guessed wrong number");
    
}