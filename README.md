# Movie-Maker

## Description
This application is used to help aspiring film directors create budgets.
On page load, the user can set a budget in the navbar and begin selecting from a comprehensive list of movie elements. As elements from each category are chosen, the selections appear in a box to the right, their budget decreases, and the progress bar moves to the right. If the user has selected at least one option from each category, and still has money in their budget, they receive a 'let's make this movie!' message. Otherwise, they receive an over budget message.


Concepts covered: HTML5, CSS3, Bootstrap, JavaScript/ES6, JSON, XHR, Node.JS/Grunt/Browserify, and DOM manipulation.

## Screenshots
View of the page after loading.
![view on page load](https://raw.githubusercontent.com/nathanpabst/movie-maker/c9889946912dba2c187df505c17f19f186c1e1b1/screenshots/Screen%20Shot%202018-05-20%20at%203.59.07%20PM.png)

When budget has been set and one category selected
![When budget has been set and one category selected](https://raw.githubusercontent.com/nathanpabst/movie-maker/c9889946912dba2c187df505c17f19f186c1e1b1/screenshots/Screen%20Shot%202018-05-20%20at%204.01.29%20PM.png)

When two categories have been selected
![When two categories have been selected](https://raw.githubusercontent.com/nathanpabst/movie-maker/c9889946912dba2c187df505c17f19f186c1e1b1/screenshots/Screen%20Shot%202018-05-20%20at%204.01.56%20PM.png)

When three categories have been selected
![When three categories have been selected](https://raw.githubusercontent.com/nathanpabst/movie-maker/c9889946912dba2c187df505c17f19f186c1e1b1/screenshots/Screen%20Shot%202018-05-20%20at%204.03.01%20PM.png)

When all categories have been selected and a positive budget remains
![When all categories have been selected and a positive budget remains](https://raw.githubusercontent.com/nathanpabst/movie-maker/c9889946912dba2c187df505c17f19f186c1e1b1/screenshots/Screen%20Shot%202018-05-20%20at%204.03.36%20PM.png)

When all categories have been selected but they've exceeded budget
![When all categories have been selected but they've exceeded budget](https://raw.githubusercontent.com/nathanpabst/movie-maker/c9889946912dba2c187df505c17f19f186c1e1b1/screenshots/Screen%20Shot%202018-05-20%20at%204.04.43%20PM.png)

## How to Run
1. Clone down this repo and cd into project
1. Install http-server plugin via npm
1. CD into the lib directory and run npm install via command line.
1. In the lib directory run the command grunt.
1. CD to the root of the directory and type hs to start the local http-server.
1. The terminal will give you a URL, such as http://127.0.0.1:8081, enter that address into your web browser.

## Contributors
[Nathan Pabst](https://github.com/nathanpabst)