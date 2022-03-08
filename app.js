const http = require('http');
const server = http.createServer((request,response)=>{
    // console.log(request,url);
    if(request.url === '/'){
        // console.Console("home page")
        response.setHeader("Content-Type" , " text/html");
        response.write('<h1>Home Page</h1>')
        response.end
    }if(request.url === '/products'){
        // console.Console("home page")
        response.setHeader("Content-Type" , " text/html");
        response.write('<h1>Products</h1>')
        response.end
    }if(request.url === '/news'){
        // console.Console("home page")
        response.setHeader("Content-Type" , " text/html");
        response.write('<h1>New</h1>')
        response.end
    }
});
const port = 3001;
server.listen(port,()=>{
    console.log(`sever is running on ${port}`);
})