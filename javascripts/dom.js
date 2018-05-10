const data = require('./data');

const outputDiv = document.getElementById('elements-card');

let categories = [];
let elements = [];

const domString = (categoryList, elementList) => {
  let output = '';
  categoryList.forEach((category) => {
    output += `<div class="container-fluid">
                    <div class="col-xs-12">
                      <h2 class="text-center header">${category.categoryName}</h2>
                      <div class="row">`;
    elementList.forEach((element) => {
      if (category.id === element.categoryId) {
        output += `<div class="col-xs-3">
                        <div class="checkbox">
                          <label>
                            <input id="${element.id}" class="check" type="checkbox" value="" disabled>${element.name}
                          </label>
                        </div>
                      </div>`;
      };
    });
    output += `</div>
                  </div>
                  </div>`;
  });
  return output;
};

const printToDom = () => {
  categories = data.getCategories();
  elements = data.getElements();
  outputDiv.innerHTML = domString(categories, elements);
};

module.exports = printToDom;
