
const fs = require('fs');
const inquirer = require('inquirer');

const {Triangle, Circle,Square } = require("./lib/shapes");

function writeToFile(fileName, answers){
    let svgString =""
    svgString = 
    '<svg version = "1.1" width ="300" height ="200" xmlns="http://www.w3.org/2000/svg">'; 
   

let Choice;
if (answers.shape === "Triangle"){
    Choice = new Triangle();
    svgString += `<polygon points ="150, 18 244, 182 56, 182" fill ="${answers.shapeBack}"/>`;
}   else if (answers.shape === "Square") {
    Choice = new Square();
    svgString += `<rect x= "90" y="40" width="120" height ="120" fill ="${answers.shapeBack}"/>`;
}   else {
    Choice = new Circle();
    svgString += `<circle cx="50" cy="25" r="20" fill= "${answers.shapeBack}"/>`;
}
    svgString += `<text x="150" y="125" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
   

    svgString += "</svg>";

 fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log ("Made logo.svg");
 });
 }

function PromptToStart(){
inquirer
.prompt([
    {
        type: 'input',
        message: 'Please enter in 3 characters for your project',
        name: 'text',
        validate: function (input) {
            if (input.length !== 3) {
                return console.log("  Must be at least 3.");
            }
            return true;
    }},
    {
        type: 'list',
        choices: ["Triangle","Circle","Square"] ,
        message: 'Please select a shape?',
        name: 'shape',
    },
    {
        type: 'input',
        message: "Please enter a Color for your text?.",
        name: 'textColor',
    },
    {
        type: 'input',
        message: "Please enter a Color for your Shape?",
        name: 'shapeBack',
    }]) 
 .then((answers) =>{
    if (answers.text.lenght > 3){
    console.log("must enter")	
    PromptToStart ();
    } else{
       writeToFile("logo.svg" , answers);
         
}
});
}
PromptToStart();