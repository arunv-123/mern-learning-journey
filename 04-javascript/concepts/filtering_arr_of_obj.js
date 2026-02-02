let arr = [{name:"arun", age:21, mark:50},{name:"akshai", age:20, mark:1},{name:"adarsh", age:8, mark:99}]

let out = arr.filter((value,index,full)=>value.age<10)

    console.log(out)