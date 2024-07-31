// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const colors = require('colors')
// TODO: Create an array of questions for user input
inquirer.prompt(
[
    {
        type: 'input',
        name: 'title',
        message: colors.red('What is the title of your project?') 
    },
    {
        type: 'input',
        name: 'description',
        message: colors.green('Provide a description of your project:') 
    },
    {
        type: 'input',
        name: 'installation',
        message: colors.blue('Provide installation instructions:')
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.green('Provide usage information:') 
    },
    {
        type: 'input',
        name: 'License',
        message: colors.red('Provide a license for your project:')
    },
    {
        type: 'input',
        name: 'contributions',
        message: colors.green('Provide contribution guidelines:')
    },
    {
        type: 'input',
        name: 'Tests',
        message: colors.blue('Provide tests:')
    },
    {
        type: 'input',
        name: 'github',
        message: colors.green('Enter your GitHub username:')
    },
    {
        type: 'input',
        name: 'email',
        message: colors.red('Enter your email address:')
    }
]
)
.then((response) => {
    const readMeContent = `# ${response.title}
  
  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ## License
  
  This project is licensed under the ${response.license} license.
  
  ## Contributing
  
  ${response.contributions}
  
  ## Tests
  
  ${response.tests}
  
  ## Questions
  
  If you have any questions about the repository, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.github}](https://github.com/${response.github}).`;
    fs.writeFileSync('README.md', readMeContent, error => {
        if (error) {
            console.error(error);
        } else {

        }
    });
    console.log(colors.green(`We're working hard on your webpage!`))
    setTimeout(() =>{
        console.log(colors.rainbow(`Your page is ready!`))
    }, 3000)
});


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) 

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then((answers) => {
//             const readMeContent = generateReadMe(answers);
//             fs.writeFileSync('README.md', readMeContent);
//             console.log('README.md has been generated');
//         })
//         .catch((error) => {
//             console.error('An error occurred:', error);
//         });
// }

// // Function call to initialize app
// init();
