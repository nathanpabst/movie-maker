let categories = [];
let elements = [];
// let budget = 0;

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
  getCategories,
  setCategories,
  getElements,
  setElements,
};
