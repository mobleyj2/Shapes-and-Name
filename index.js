//GIVEN a command-line application that accepts user input
//WHEN I am prompted for text
//THEN I can enter up to three characters
//WHEN I am prompted for the text color



const {writeFile} = require('fs').promises;
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What are 3 letters you would like inside your Shape?',
            name: 'name',
        }])