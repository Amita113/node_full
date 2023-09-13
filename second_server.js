const http =require('http')
const { stringify } = require('querystring')

http.createServer((res,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'})
    resp.write(JSON.stringify({name1:"ganesha",email:"ganesha@gmail.com"}))
    resp.end()
}).listen(4000)

