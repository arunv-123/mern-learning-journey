let promises = new Promise((res,rej)=>{

    setTimeout(()=>{
    res("fulfilled")
    rej("failed")
},2000)
})
promises.then((x)=>
{
    console.log("Successful");
    
}
).catch((y)=>
{
    console.log("Failed");
    
})