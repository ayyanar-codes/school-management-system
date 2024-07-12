const portNumber=5000;
const dotenv=require('dotenv');

const express=require('express');
const app=express();
const path=require('path');


app.use('/landing/', require('./routes/landingRoute'));
app.use(express.json());

app.listen(portNumber, ()=>{
    console.log(`Server started with port number: ${portNumber}`);
});




