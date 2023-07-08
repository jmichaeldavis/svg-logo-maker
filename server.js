const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");
const fs = require('fs');


// Text Render Area
function getText(textInput, colorInput) {
  logoText = `<text x="150" y="150" text-anchor="middle" font-size="100"  fill="${colorInput}">${textInput}</text>`
  return logoText;
}
// Shape Render Area
function getShape(shapeInput, shapeColorInput) {
  if(shapeInput === 'square') {
    //Square
    return `<rect x="50" height="300" width="300" fill="${shapeColorInput}">`
  } else if(shapeInput === 'circle') {
    //Circle
    return `<circle cx="50%" cy="50%" r="150" height="100%" width="100%" fill="${shapeColorInput}">`
  } else {
    //Triangle
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${shapeColorInput}">`
  }
}

function getSVG(shape, text) {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${shape} ${text} </svg>`
}

inquirer.prompt([
    {
      type: 'input',
      message: `Please enter the text of the logo (must be 3 characters or less)`,
      name: 'logoText',
    },
    {
      type: 'input',
      message: `What would you like the text color to be?`,
      name: 'textColor',
    },
    {
      type: 'list',
      message: `What would you like the shape to be?`,
      name: 'logoShape',
      choices: [circle, triangle, square]
    },
    {
      type: 'input',
      message: `What would you like the shape color to be?`,
      name: 'shapeColor',
    },
  ])
  .then((data) => {
    const textInput = data.logoText;
    const textColor = data.textColor;
    const shapeInput = data.logoShape;
    const shapeColor = data.shapeColor;
    
    if(textInput < 4) {
    const shape = getShape(shapeInput, shapeColor)
    const text = getText(textInput, textColor)
    const logoData = getSVG(shape, text)

    fs.writeFile('logo.svg', logoData, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    } else {
      console.log("Please make sure your text is 3 characters or less")
      return
    }
  })


