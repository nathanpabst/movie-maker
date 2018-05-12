const data = require('./data');

const sendBudgetAmt = () => {
  const userBudget = data.setBudget();
  document.getElementById('setAmount').disabled = true;
  document.getElementById('userBudget').innerHTML = `<h3>$${userBudget}</h3>`;
};

const budgetAmt = (e) => {
  const userInput = (document.getElementById('getAmount').value) * 1;
  data.getBudget(userInput);
  sendBudgetAmt();
};

const budgetButton = () => {
  const button = document.getElementById('setAmount');
  button.addEventListener('click', budgetAmt);
};

module.exports = {
  budgetButton,
};
