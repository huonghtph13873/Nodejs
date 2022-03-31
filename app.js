import express from 'express';
import homeRoute from './routes/home'
import productRoute from './routes/products'
import authRoute from './routes/auth'
import mongoose from 'mongoose';
const app=express();

app.use(express.json())
app.use(homeRoute);
app.use("/api" ,productRoute);
app.use("/api",authRoute);
mongoose.connect('mongodb://localhost:27017/nodejs');
// const server = http.createServer((request,response)=>{
//     // console.log(request,url);
//     if(request.url === '/'){
//         // console.Console("home page")
//         response.setHeader("Content-Type" , " text/html");
//         response.write('<h1>Home Page</h1>')
//         response.end
//     }if(request.url === '/products'){
//         // console.Console("home page")
//         response.setHeader("Content-Type" , " text/html");
//         response.write('<h1>Products</h1>')
//         response.end
//     }if(request.url === '/news'){
//         // console.Console("home page")
//         response.setHeader("Content-Type" , " text/html");
//         response.write('<h1>New</h1>')
//         response.end
//     }
// });
const port = 8000;
app.listen(port,()=>{
    console.log(`sever is running on ${port}`);
})