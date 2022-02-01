const express = require('express');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');

const app = express();

app.get('/body', (request, response)=>{
    response.json({mgessage: "hi"});
});



app.listen(3000, ()=>{
    console.log("server started at 3000");
});