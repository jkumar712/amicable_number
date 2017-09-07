let fetch = require('node-fetch');
let colors = require('chalk');
let operate = require('./operations');
const number = Number(process.argv[2]);
// console.log(fetch);

fetch('https://randomuser.me/api/?results=2').then(res => {
  return res.json();
}).then(json => {
  json.results.forEach((response) => {
    // console.log(response.email);
  });
}).catch((response) => {
  console.error(response);
});
// console.warn(colors.red("this is a warning"));
operate(number);
