// const http = require('http')
// import http from 'http'

// const PORT = 3000

// const nodeServer = http.createServer((req,res)=>{
//     res.statusCode = "200";
//     // res.setHeader('Content-Type', 'text/');
//     res.end('<h1>devraj is here</h1>')
// })

// nodeServer.listen(PORT, () => {
//     console.log("Server is running at port 3000...");
// });

///----------------------------------------------------

import express from 'express'


const PORT = 3000
const app = express()

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log(`Hey server is running on port: localhost:${PORT}`)
})

