import express from 'express';
const homeRoute = express.Router();
homeRoute.get('/',(request,response)=>{
    response.send(`
    <h1>Homepage</h1>
    `);
});

export default homeRoute