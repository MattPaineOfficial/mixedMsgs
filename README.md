# Short Story Randomizer
## Description
This is my solution to the Mixed Messages Portfolio Project, from CodeCademy. Thier given prompt was to "...build a message generator program. Every time a user runs a program, they should get a new, randomized output.".\

Given Objectives:
  - Build a message generator program using JavaScript
  - Use Git version control
  - Use command line
  - Develop locally on your computer

## Features
A short story with five random elements, changed by clicking a button. Each of the five interchangeable elements has at least four different options, (stored in arrays).\

For example, the following stores the story's beginning element's options:\
`const begin = ['Once upon a time', 'In a land far, far away', 'A long time ago', 'Twenty thousand leagues under the sea', 'On the third day of creation'];`\

Then, inside a function, `Math.floor(Math.random()...);` is used to pick a random value from each array. The function also includes the variable storing the story text and string interpolation is used to insert the chosen random elements. Finally, the newly generated story is displayed on button click.

## Languages
- JavaScript
- HTML/CSS
- [Node](https://nodejs.org/en) (version 20.10.0)
 
## Setup
To run, locally install the three provided files:
- mixedMsgs.html
- mixedMsgs.css
- mixedMsgs.js

Then run the mixedMsgs.html file, (e.g. Open with > Firefox)

## Author
Me - [(Matt Paine)](https://github.com/MattPaineOfficial)
