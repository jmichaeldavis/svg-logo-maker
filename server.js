const inquirer = require('inquirer');


inquirer.prompt([
    {
      type: 'input',
      message: `What is the employee's first name?`,
      name: 'firstName',
    },
    {
      type: 'input',
      message: `What is the employee's last name?`,
      name: 'lastName',
    }
  ])

  .then((data) => {
  })