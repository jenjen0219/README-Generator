// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
`;
  }
  return ''
};

// this will add the license section into the table of contents if of course something is selected
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
};

//this will add the licensing section to the readme
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License  
This project is licensed under the ${license} license.
`;
  } else {
    return '';
  }
};



// this bad boy here is the function of which will generate the content within the readme file
function generateMarkdown({ title, description, installation, usage, contributing, tests, username, email, license }) {
  licenseSection = renderLicenseSection(license);
  licenseBadge = renderLicenseBadge(license);
  licenseTable = renderLicenseLink(license);

  return `# ${title}  
  ${licenseBadge}
  ## Description
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${licenseTable}

  ## Installation
  ${installation}
  ## Usage
  ${usage}

  ## Contributing
  ${contributing}
  ## Tests
  ${tests}  
  
  ## Questions
  Created by: ${username}.\n
  Feel free to contact me by email with any questions: [Email](mailto:${email}) \n
  My Github profile is at: [GitHub](https://github.com/${username})
  ${licenseSection}`;
}

//if I'm understanding this correctly then I believe this is what allows our functions from this file be able to be read from our index.js file
module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};