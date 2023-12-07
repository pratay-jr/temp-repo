const http = require('http'); 

const server= http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.end('welcoeme to our homepage')
    }
    if(req.url === './about')
    {
        res.end('welcome to our about page ');
    }
    res.end(`
    <h1>hello cant fidn the page </h1>
    <a href ="/> back to home</a>`)
})
server .listen(5000)