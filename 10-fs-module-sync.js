//SYNCHRONOUS FS MODULE
const { readFileSync,writeFileSync } = require('fs')
console.log("task will start ")
const first =readFileSync('./content/intro.txt','utf8') 
const second=readFileSync('./content/subbcontent/test.txt','utf8') 
console.log(first,second)

writeFileSync(
    './content/result.txt', // iff there is no file named result then a file will be created .
    `let me introduce myself:${first},${second}`, // appends the first and second and shows in result.txt 
    {flag:'a'} // if we add this flag then the text wont be overwritten it will simply appenda/add
    )
    console.log("task ccompleted ")
     // the problem here is if we have 20 user accesing the readfile and if rohit as user is not gettin the data on time then  all the user later wont recieve the data till the rohit is cleared