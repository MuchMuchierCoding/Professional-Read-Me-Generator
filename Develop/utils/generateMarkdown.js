// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `## License Link
    
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    ${license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.name}

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage Information

${data.use}

## How to Contribute

${data.contributions}

## Features

${data.features}

## Credits

${data.credit}

## License

${data.license}

`;
}

module.exports = generateMarkdown;
