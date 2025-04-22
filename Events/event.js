const Event = require("events")
const ev = new Event()
ev.on("welcome",(user,pro)=>{
    console.log(`hellow  ${user} am ${pro}`);
})
ev.emit("welcome","kj",'learner')