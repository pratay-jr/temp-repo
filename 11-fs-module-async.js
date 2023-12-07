//ASYNCHRONOUS FS MODULE
const { readFile,writeFile  } = require('fs')
console.log("task is going to start")
// /need to read file as a callbabck function
readFile('./content/intro.txt','utf8',(error,result)=>
{
    if(error)
    {
    console.log(error)
        return 
    }
    const first = result;
    readFile('./content/subbcontent/test.txt','utf8',(error,result)=>{
        if(error)
        {
            console.log(error)
            return 
    }
    const second = result;
    writeFile(
        './content/result-async.txt',
        `let me introduce myself:${first},${second}`,
        (error,result)=>
        {
            if(error)
            {
                console.log(error)
                return
            }
            console.log("done")
        }
    )
  })
})
console.log("task has ended ")

//  as soon as we start this task we offload the task and we continue the task and we keep on serving other users again so no wait time is there for any users if data fetching is slower 