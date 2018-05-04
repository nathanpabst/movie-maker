const outputDiv = document.getElementById('elements-card');

const categoryDom = (categories) => {
  let domString = '';
  categories.forEach(category => {
    domString +=
    `<div class="row">
      <h2<${category.categoryName}</h2>
      <div id="${category.id}" class="selections row">
      </div>
    </div>`;
  });
  return domString;
};

const printToDom = (categories) => {
  outputDiv.innerHTML = categoryDom(categories);
};

module.exports = printToDom;
