// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const fs = require("fs");
const axios = require("axios");
const util = require("util");
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");


const writeToFile = util.promisify(fs.writeFile);


function promptUser()
{
  //return answers to a query of questions using inquirer
  return inquirer.prompt([
    //User github username
    {
      type: "input",
      name: "username",
      message: "What is your Github username?"
    },
    //Users Contact Email
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    //Users Project Title/Name
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    //User Story description
    {
      type: "input",
      name: "description",
      message: "Please give a description of your project"
    },
    
  
  ]);
}
async function init() {
  //gather users answers to the questions using promptUser()
  let answers = await promptUser();
  //Gather github information from the github API
  await axios.get(`https://api.github.com/users/${answers.username}`).then(function(response){
    //Add variables to the answers object
    answers.avatar =  response.data.avatar_url;
    answers.gitURL = response.data.html_url;
    answers.name = response.data.name;
  }).catch(function(){
    //Let User Know That Account Was Not Found
    console.log("Github account not found or not entered");
    //Add empty information to the answers
    answers.avatar =  "";
    answers.gitURL = "";
    answers.name = "";
  });//End 

  //Create Mardown Page using genMardown in generateMarkdown.js
  const markdown = await genMarkdown(answers);
  
  console.log("Generating README.md...")
  //Write README.md inside readMeFile folder
  await writeToFile('./readMeFile/README.md', markdown);
  
  console.log("README.md has been created in the readMeFile folder!");
}

//Start the Program
init();




