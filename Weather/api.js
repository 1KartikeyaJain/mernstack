const Input=document.getElementById("input")
const button=document.getElementById("but")
const Name=document.getElementById("name")
const time=document.getElementById("humid")
const input=document.getElementById("Temp")
async function gett(namee) {
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=bd4d2280db034d4599531325251704&q=${namee}&aqi=yes`)
    return await res.json()
    
}
button.addEventListener("click",async()=>{
    const v=Input.value
    const result=await gett(v)
    Name.innerText=`${result.location.name},${result.location.region}`
    input.innerText=`${result.current.temp_c}°C`
    time.innerText=`${result.current.cloud}`

})