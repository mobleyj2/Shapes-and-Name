//GIVEN a command-line application that accepts user input
//WHEN I am prompted for text
//THEN I can enter up to three characters
//WHEN I am prompted for the text color
//const shapeChoice = new Triangle() =require("./lib/shapes")
//shape.setColor$(answers.ShapeBackgroundColor);
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const fs = require('fs');

const inquirer = require('inquirer');

const {Square, Triangle, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers){
    let svgString =""
    svgString = 
    '<svg version = "1.1" width ="300" height ="200" xmlns="http://www.w3.org/2000/svg">'; 
    //svgString +="<g>";
    //svgString += `${answers.shape}`;

let Choice;
if (answers.shape === "Triangle"){
    Choice = new Triangle();
    svgString += `<polygon points ="150, 18 244, 182 56, 182" fill = "${answers.ShapeBackgroundColor}"/>`;
}   else if (answers.shape === "Square") {
    Choice = new Square();
    svgString += `<rect x= "73" y="40" width="160" height ="160" fill = "${answers.ShapeBackgroundColor}"/>`;
}   else {
    Choice = new Circle();
    svgString += `<Circle cx="25" cy="75" r="20" fill= "${answers.ShapeBackgroundColor}"/>`;
}
    svgString += `<text x="150" y="125" text-anchor="middle" font-size="40" fill= "${answers.textColor}">${answers.text}</text>`;
   //svgString += "</g>";

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
        choices: ["Square","Triangle","Circle"] ,
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
        name: 'ShapeBackgroundColor',
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