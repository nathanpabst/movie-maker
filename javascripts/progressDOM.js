const updateProgress = (selections) => {
  const progressBar = document.getElementById('progressBar');
  const whichCategory = [...new Set(selections.map(item => item.categoryId)),];
  console.log('from progressDOM', whichCategory);
  if (whichCategory.length === 1) {
    progressBar.classList.add('twentyFive');
  } else if (whichCategory.length === 2) {
    progressBar.classList.add('fifty');
  } else if (whichCategory.length === 3) {
    progressBar.classList.add('seventyFive');
  } else if (whichCategory.length === 4) {
    progressBar.classList.add('oneHundred');
  }
};

module.exports = updateProgress;
