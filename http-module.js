const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('here is our history')
    }
    res.end(
        `<p>oops! we dont have the page</p>
        <a href="/">back home</a>
        `
    )
})
server.listen(5000)