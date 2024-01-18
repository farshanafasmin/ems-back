// import dotenv package and cofigure it

require('dotenv').config()

// import node mongodb connection file

require('./DB-Connection/connection')

// import express and assign it to a variable

const express=require('express')

// import router

const router=require('./Routes/router')

// import cors and assign it to a variable for further use in project

const cors=require('cors')

// create server using expresss

const emsServer=express()

// use cors in server

emsServer.use(cors())

// pars json data in server

emsServer.use(express.json())

// user router in server

emsServer.use(router)

// to get profile photo ,to access exclusive 
// to get file from backend to frontend

emsServer.use('/Uploads',express.static("./Uploads"))

// customize port for server

const PORT=4000||process.env.PORT

// run server app

emsServer.listen(PORT,()=>{
    console.log(`emsServer started at port:${PORT}`);
})


// emsServer.post('/',(req,res)=>{
//     res.send(`<h1>Ems server started at port: ${PORT}</h1>`)
// })