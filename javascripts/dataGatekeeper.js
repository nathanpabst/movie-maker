const loadElements = require('./elements');
const loadCategories = require('./categories');
const data = require('./data');
const dom = require('./dom');
const events = require('./events');

const onCategoryLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCategories(categoryData);
  dom(categoryData);
};

const onElementLoad = function () {
  const elementData = JSON.parse(this.responseText).elements;
  data.setElements(elementData);
  dom(elementData);
};

const badThings = function () {
  console.error('dang friggin crap!');
};

const initializer = () => {
  loadCategories(onCategoryLoad, badThings);
  loadElements(onElementLoad, badThings);
  events.getBudget();
};

module.exports = {
  initializer,
};
