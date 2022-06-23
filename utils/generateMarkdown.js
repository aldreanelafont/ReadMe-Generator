function renderLicenseBadge(license) {
  
  if (license !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${license.split(' ').join('')}-blue.svg)`;

  } else {
    ''
  }
};


function renderLicenseLink(license) {
  if (license !== 'None') {
    return `https://opensource.org/licenses/${license.split(' ').join('')}`;
  } else {
    '';
  };
};


function renderLicenseSection(license) {
  if (license !== 'None') {
    return `LicenseSection: This app is under the ${license} license`
  } else {
    ''
  }
}



function generateMarkdown(data) {
  const gitHubLink = `https://github.com/${data.github}`

  return `# ${data.title}
  ## Table of Contents 
  - [Licenses](#licensing)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contribution)
  - [Test](#test)
  - [Questions](#questions)
## Licensing
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
\n
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.instal}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Test
${data.test}
## Questions
For any questions, please feel free to reach me at [email](${data.email}).
If you'd like to see other apps that I created, here is my github page: [${data.github}](${gitHubLink}).
`
};

module.exports = generateMarkdown;