// import express library 
const express=require('express')
const notes = require("./data/datas");
const data = notes.default;
const dotenv=require('dotenv');

// server creating
const app=express();
dotenv.config()

app.get('/',(req,res)=>{
    res.send('API is running');
})

app.get('/api/scholarship',(req,res)=>{
    res.json(data);
})

app.get('/api/scholarship/:id',(req,res)=>{
    const note = data.find((n) => n.id.toString() === req.params.id);

    res.send(note);
})

const PORT=process.env.PORT || 5500

app.listen(PORT,()=>console.log(`server started on port ${PORT} `))