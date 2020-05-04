

module.exports = generateMarkdown; 

function generateMarkdown(data) {
    return `
    # ${data.title}

  
  # Instructions:
  To run this application you will need to run node with the following command:
  > node index.js
  Then follow the prompts.
  # Description of the project: 
  ${answers.description}
  # User story
  As a developer creating a new project 
  I want to be able to create a good README quickly
  So that I can create projects a lot faster.
  # table of contents
  * [Instructions](#Instructions)
  * [License](#License)
  * [Installation](#Installation)
  * [Github](#Github)
  # Installation
  To install the application clone the repository to your computer and run it through Node.js. 
  You will then be prompted for the various inputs you can add to the readme.
  # Usage
  This is useful to generate a new README for your next project.
  # Contributing
  
  
  # Github
  ![Profile Image](${imageURL})
  Github Email: ${answers.email}
  ![built-with-love](https://forthebadge.com/images/badges/built-with-love.svg)
  # Tests
  Running the code will look like this:
  <pre><code>$ node index.js
  What is the title of your project? README Generator
  Please write a description for you project. This is usefule for created a README with styling already set in Markdown
  What is your Github email? user@domain.com
  What is your Github username? username</code></pre>
  `;
}

module.exports = generateMarkdown;