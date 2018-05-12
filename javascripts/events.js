const data = require('./data');
const budgetDom = require('./budgetDom');

let movieElements = [];
const selections = [];

const findSelections = (e) => {
  movieElements = data.getElements();
  const selectedElement = e.target;
  // console.log(e.target);
  selectedElement.setAttribute('disabled', 'disabled');
  movieElements.forEach((element) => {
    if (element.id === selectedElement.id && selections.indexOf(element) === -1) {
      // console.log(element);
      selections.push(element);
    };
  });
  data.setCost(selections);
  budgetDom.printToBudget(selections);
};

const activateChecks = () => {
  const checkBoxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].disabled = false;
    checkBoxes[i].addEventListener('click', findSelections);
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
  activateChecks();
};

const budgetButton = () => {
  const button = document.getElementById('setAmount');
  button.addEventListener('click', budgetAmt);
};

module.exports = {
  budgetButton,
  activateChecks,
};
