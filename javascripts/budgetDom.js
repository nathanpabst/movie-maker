const data = require('./data');

const priceTag = () => {
  const budgetAmt = data.getBudget() * 1;
  const expenses = data.getCost() * 1;
  const balance = budgetAmt - expenses;
  return balance;
};

// const printPriceTag = () => {

// };

const printToBudget = (selections) => {
  const outputDiv = document.getElementById('selections');
  outputDiv.innerHTML = selectionOutput(selections);
};

const selectionOutput = (selections) => {
  let output = '';
  selections.forEach((selection) => {
    output += `<h4>${selection.name}: $${selection.cost}</h4>`;
  });
  return output;
};

module.exports = {
  printToBudget,
  priceTag,
};
