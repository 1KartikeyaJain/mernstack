// import fs from "fs"
// import http from "http"
// const server = http.createServer()
// server.on("request",(req,res)=>{
//     fs.readFile("kj.txt",(err,data)=>{
//         if(err)return console.error(err);
//         res.write(data.toString())
//         res.end()
//     })
// })
// const port = 2000
// server.listen(port,()=>{
//     console.log(`running on ${port}`);
// })

// Using Stream 

import fs from "fs"
import http from "http"
const server = http.createServer()
server.on("request",(req,res)=>{
    const stream=fs.createReadStream("kj.txt")
    stream.on("data",(data)=>{
        res.write(data)
    })
    stream.on("end",()=>{
        res.end()
    })
    stream.on("error",(er)=>{
        console.log(er);
        res.end("bhai kuch toh galat hai ")
    })
})
const port = 2000
server.listen(port,()=>{
    console.log(`running on ${port}`);
})