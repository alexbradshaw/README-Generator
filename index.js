const inq = require('inquirer')
const fs = require('fs')

inq
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projName',
        },
        {
            type: 'input',
            message: 'What was your motivation for this project?',
            name: 'projMotiv',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'projWhy',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'projProb',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'projLearn',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'projInst',
            default: 'npm install'
        },
        {
            type: 'input',
            message: 'What is the name of your image (Include file ending)',
            name: 'projPic',
        },
        {
            type: 'list',
            message: 'What license do you need?',
            name: 'license',
            choices: [
                'MIT (Free use with preservation of copyright/license notices)',
                'GNU (Free use but contributors must waive right to patents. Copyright/license notices must be preserved)',
                'The Unlicense (No conditions, dedicates works to public domain)'],
            default: 'MIT'
        },
        {
            type: 'input',
            message: 'What are the steps to contribute?',
            name: 'contributing',
            default: 'This project is complete. Not contributions necessary.'
        },
        {
            type: 'input',
            message: 'What are tests you can run to make sure the project runs as expected?',
            name: 'tests',
            default: 'N/A'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'ghub',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then(res => {
        const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        const Unlicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        let coolLicense = res.license.split(' ')
        console.log(coolLicense);
        if (coolLicense[0] == 'MIT') {
            var currentLicense = MIT;
        } else if (coolLicense[0] == 'GNU') {
            var currentLicense = GNU;
        } else {
            var currentLicense = Unlicense;
        }
        fs.writeFile('README.md',
            `
# ${res.projName}
${currentLicense}
## Description
What was your motivation? 
- ${res.projMotiv}

Why did you build this project?
- ${res.projWhy}

What problem does it solve?  
- ${res.projProb}

What did you learn?
- ${res.projLearn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${res.projInst}
## Usage
![${res.projPic}](assets/$${res.projPic}?raw=true)
## License
${currentLicense}
## Contributing
${res.contributing}
## Tests
${res.tests}
## Questions
[Github: ${res.ghub}](https://github.com/${res.ghub}) <br>
[Email](mailto:${res.email})
`, err => console.log(err))
    })

    .catch(err => console.error(err))