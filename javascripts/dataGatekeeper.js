const xhr = require('./xhr');
const data = require('./data');
const categoryDom = require('./categoryDom');
// const elemDom = require('./elementsDom');

const onCategoryLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCategories(categoryData);
  categoryDom(categoryData);
};

// const onMovieElementLoad = function () {
//   const movieData = JSON.parse(this.responseText).movies;
//   data.setElements(movieData);
//   elemDom(movieData);
// };

const badThings = function () {
  console.error('dang friggin crap!');
};

const initializer = () => {
  // xhr.loadMovieElements(onMovieElementLoad, badThings);
  xhr.loadCategories(onCategoryLoad, badThings);
};

module.exports = {
  initializer,
};
