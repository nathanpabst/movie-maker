const data = require('./data');
const budgetDom = require('./budgetDom');
const progressDOM = require('./progressDOM');

let movieElements = [];
const selections = [];

const findSelections = (e) => {
  movieElements = data.getElements();
  const selectedElement = e.target;
  // console.log('from events.js', selectedElement);
  selectedElement.setAttribute('disabled', 'disabled');
  movieElements.forEach((element) => {
    if (element.id === selectedElement.id && selections.indexOf(element) === -1) {
      selections.push(element);
      data.setCost(selections);
      budgetDom.priceTag();
      sendBudgetAmt();
    };
  });
  budgetDom.printToBudget(selections);
  progressDOM.updateProgress(selections);
};

const activateChecks = () => {
  const checkBoxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].disabled = false;
    checkBoxes[i].addEventListener('click', findSelections);
  }
};

const sendBudgetAmt = () => {
  const userBudget = data.getBudget();
  document.getElementById('setAmount').disabled = true;
  document.getElementById('userBudget').innerHTML = `<h3>$${userBudget}</h3>`;
};

const budgetAmt = (e) => {
  const userInput = (document.getElementById('getAmount').value) * 1;
  data.setBudget(userInput);
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
  sendBudgetAmt,
};
