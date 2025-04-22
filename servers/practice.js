const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("bhai hi how are u")
        res.end()
    }
        if(req.url=="/signup"){
        res.write("sign up  Page")
        res.end()
    }


    if(req.url=="/loginpage"){
        res.write("Login Page")
        res.end()
    }
    else{
        res.write("page not found")
        res.end()
    } 
})
const port = 4000
server.listen(port,()=>{
    console.log(`running on the ${port}`);
})