function generateMarkdown(data) {
  return ` # ${data.title}
  
  ## Description
  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  * [Screenshot](#screenshot)
  * [Video](#video)
  
  The motivation for this project was ${data.descriptionMotivation}. 
    
  The problem which needed to be solved was ${data.descriptionSolve}.
  
  From this project I learnt ${data.descriptionLearn}.
  
  ## Installation
  To install this application ${data.installation}.
  
  ## Usage
  The intended use of this application is ${data.usage}.
  
  
  ## Credits
  The development person/team responsible for this is ${data.credits}.
  
  ## Licence 
  This project has a ${data.license}.
  ## Questions 
  If there are any questions about the project feel free to email me at:  
  - Email: ${data.email}
  
  ## Screenshot
  
  ## Video 
  `;
}

module.exports = generateMarkdown;