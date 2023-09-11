console.log("hi there")
async function classList(){
    console.log("a")
    console.log("b")
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`I'll be waiting`)
        },3000)
        resolve()
    })
}

classList()
console.log("c")
console.log("d")
