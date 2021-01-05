const nameCampus = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello, I'm ${nameCampus.name} and I'm from the ${nameCampus.campus} campus`,
    e : 'oO',
    T : "S"}));

