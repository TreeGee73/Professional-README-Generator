// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Usage
  ${data.usefaq}

  ## Installation
  ${data.install}

  ## Testing
  ${data.test}

  ## License
  ${data.license}

  ## Contributing to This Repo
  ${data.contributefaq}

  ## Questions / Contact Details
  If you have any questions or need to contact me about this app, I can reached either on Github at [${data.github}](https://github.com/${data.github}) or by email at [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;
