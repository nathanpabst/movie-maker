const setBudget = (e) => {
  console.log('e', e);
};

const getBudget = () => {
  const budgetAmt = document.getElementById('setAmount');
  budgetAmt.addEventListener('click', setBudget);
};

module.exports = {
  getBudget,
};
