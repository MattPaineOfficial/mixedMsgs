// Random Option Arrays
const begin = ['Once upon a time', 'In a land far, far away', 'A long time ago', 'Twenty thousand leagues under the sea', 'On the third day of creation'];
const person = ['a King', 'an Alien', 'a Dolphin', 'a humaniod banana'];
const firstName = ['Jack', 'Will', 'ELizabeth', 'Charlie the Magician', 'Kunsthaneous the Great'];
const live = ['an old shoe', 'thier parents conservatory', 'your mind', "Santa's Grotto"];
const attrib = ['only ate cheese', 'died a heros death', 'were completely mad', 'hit people with sticks'];

// Random Number Vars
let i = Math.floor(Math.random() * begin.length);
let j = Math.floor(Math.random() * person.length);
let x = Math.floor(Math.random() * firstName.length);
let y = Math.floor(Math.random() * live.length);
let z = Math.floor(Math.random() * attrib.length);

// Story Var
let story = `${begin[i]}, there was ${person[j]} named ${firstName[x]}. They lived in ${live[y]} and ${attrib[z]}.`;

console.log(story);

function displayStory() {
    document.getElementById("storyText").innerHTML = story;
}
// To Do
// Function to display story text when btn clicked