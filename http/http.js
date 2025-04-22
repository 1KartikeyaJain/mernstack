// const http = require("http")
// const servers = http.createServer((req,res)=>{
//     http.req=="/"
//     res.write("welcome to page")
//     res.end
// })
// port = 3000
// servers.listen(port,()=>{
//     console.log(`lisning the command ${port}`);
// })
const HTTP = require("http")
const servers = HTTP.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("welcome to page")
        res.end()
    }
    if(req.url=="/admin"){
        res.write("welcome to Admin page")
        res.end()
    }
    if(req.url=="/Web"){
        res.write("welcom to Web php")
        res.end()
    }
})
const port = 4000
servers.listen(port,()=>{
    console.log(`lisning the command ${port}`);
})