const http=require('http')

// http.createServer().listen(3000)

// test(a,b){
    
    
    // }
    // test(10,20)
    
    //we can pass a function as a parameter
    
    http.createServer((req,resp)=>{
    resp.write(" <h1> Hi hello  how is your day today</h1> ")
    resp.end()
    }).listen(3000)


    //run on browser once on the port
    //npm install nodemon -g