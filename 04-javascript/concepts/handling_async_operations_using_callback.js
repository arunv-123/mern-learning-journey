function value1(cb){
    setTimeout(()=>{
        return cb(100);
    },1000)
}

function value2(cb){
    setTimeout(()=>{
        return cb(200)
    },1000)
}
value1((x)=>{
    console.log(x);
    
    value2((y)=>{
        console.log(y);   
        console.log(x+y);
    })
    
})
