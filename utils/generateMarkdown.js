// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
