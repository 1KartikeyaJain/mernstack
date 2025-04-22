const FS= require("fs").promises
const filena = "kj.txt"
const writefile = async()=>{
    try {
        await FS.writeFile(filena,"hi i am here","utf-8")
        console.log("Done");
    } catch (error) {
        console.error("this is an error");
    }
}
writefile()
// const writefile = async()=>{
//     try {
//         await FS.appendFile(filena,"hi i am here","utf-8")
//         console.log("Done");
//     } catch (error) {
//         console.error("this is an error");
//     }
// }
// writefile()