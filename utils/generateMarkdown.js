// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {

    case 'MIT' :
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  
  
      case 'Mozilla Public License' :
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  
  
      case 'Apache':
        return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  
      case 'GPLv3' :
        return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  
      case 'BSD 3-Clause' :
        return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  
      default:
        return ''
}}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {

    case 'MIT' :
      return `This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT</a> license.`;
  
  
      case 'Mozilla Public License' :
        return `This project is licensed under the <a href="https://opensource.org/licenses/MPL-2.0">Mozilla Public License.</a>`;
  
  
      case 'Apache':
        return `This project is licensed under the <a href="https://opensource.org/licenses/Apache-2.0">Apache</a> license.`;
  
      case 'GPLv3' :
        return `This project is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0">GPLv3</a>license.`;
  
      case 'BSD 3-Clause' :
        return `This project is licensed under the <a href="https://opensource.org/licenses/BSD-3-Clause">BSD 3-Clause</a> license.`;
  
      default:
        return ''
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data);
 
  const licenseSection = renderLicenseSection(data);

  return `# ${data.title}
  ${licenseBadge}

## Description
${data.description}
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## License
This project is licensed under the ${data.license} license.
## Contribution
Contributors: ${data.contribution}
## Testing
${data.testing}
## Questions
For questions about this repo, application, or to provide feedback please contact me at ${data.email}
My GitHub repo can be found at github.com/${data.github}
`;
}

module.exports = generateMarkdown;