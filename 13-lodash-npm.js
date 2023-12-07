// npm init -y : to create package.json with default setting 
// npm init  : to create package.json with step by step setting 
// to install dependecies/packages : npm i <packagename>

// here we are using lodash package , used to flatten a array

const id = require('lodash')
 
const item = [1,2,[3,4,[5,5,[6]]]];

//  flattenDeep: used to flatten a array
const newitem = id.flattenDeep(item)
console.log(newitem)
