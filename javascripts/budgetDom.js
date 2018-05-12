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
};
