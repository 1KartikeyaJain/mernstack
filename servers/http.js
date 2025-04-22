const http = require("http")
const servers = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Welcom to  server")
        res.end()
    }
})
const port = 2000
servers.listen(port,()=>{
    console.log(`running on the ${port}`);
})