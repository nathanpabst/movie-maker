const data = require('./data');

const activateOptions = () => {
  const checkBoxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].disabled = false;
  }
};

const sendBudgetAmt = () => {
  const userBudget = data.setBudget();
  document.getElementById('setAmount').disabled = true;
  document.getElementById('userBudget').innerHTML = `<h3>$${userBudget}</h3>`;
};

const budgetAmt = (e) => {
  const userInput = (document.getElementById('getAmount').value) * 1;
  data.getBudget(userInput);
  sendBudgetAmt();
  activateOptions();
};

const budgetButton = () => {
  const button = document.getElementById('setAmount');
  button.addEventListener('click', budgetAmt);
};

module.exports = {
  budgetButton,
};
