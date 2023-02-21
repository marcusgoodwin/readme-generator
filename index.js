// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide instructions for installation:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide an example of how to use your project:'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any credits or sources (if any):'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquirer.prompt(questions).then((answers) => {
    let readme = `# ${answers.projectName}\n\n`;
    readme += `## Description\n${answers.description}\n\n`;
    readme += `## Installation\n${answers.installation}\n\n`;
    readme += `## Usage\n${answers.usage}\n\n`;
    readme += `## Credits\n${answers.credits}\n\n`;
    readme += `## License\nThis project is licensed under the ${answers.license} license.\n\n`;
    readme += `## Email\nThe creator's email is ${answers.email}\n\n`;
    readme += `## Github\nThe creator's github is www.github.com/${answers.github}\n\n`;
  
    fs.writeFileSync('README.md', readme);
  });
// TODO: Create a function to initialize app
function init(fileName = "README.md") {}

// Function call to initialize app
init();