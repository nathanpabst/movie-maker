let categories = [];
let elements = [];
let budget = 0;
let priceTag = 0;

const setCost = (selections) => {
  selections.forEach((selection) => {
    priceTag += selection.cost;
  });
};

const getCost = () => {
  return priceTag;
};

const setBudget = userInput => {
  budget = userInput;
  // console.log('from setBudget', userInput);
};

const getBudget = () => budget;

const getCategories = () => {
  return categories;
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getElements = () => {
  return elements;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
};

module.exports = {
  getCost,
  setCost,
  getBudget,
  setBudget,
  getCategories,
  setCategories,
  getElements,
  setElements,
};
