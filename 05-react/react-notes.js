let Inc =()=>{

// setCount(count+1)
// setcount(count+1) 
// setCount(count+1)
// setCount(count+1) //Because of one rendering of 4 statements, count value taken = 0 (in 4 lines)

setCount(prev=>prev+1)
setCount(prev=>prev+1)
setCount(prev=>prev+1)
setCount(prev=>prev+1)

}



//Looping an array
    {data.map((val)=>

        <h1>{val}</h1>
        <h1>{val}</h1>

    )} // error because of multiple line of code
//Correct way
    {data.map((val)=>{

        return<h1>{val}</h1>
        return<h1>{val}</h1>
    }
    )}
//OR
    {data.map((val)=>
        <> //React Freagment
        return<h1>{val}</h1>
        return<h1>{val}</h1>
        </>
    )}




    //USE EFFECT
    let Inc =()=>{

setCount(prev=>prev+1)

}

useEffect(()=>{
O
console.log("inside useEffect");

},[count ]I

// function Temp(params) { ...
// Temp()

let Dlt =(index)=>{
let res = data.filter((val,ind)=> index !== ind )

setData(res)

...



///Terinary operator
return (
<div>
<h1>{count}</h1>
<h1>{count == 0?"x":"y"}</h1>

[count == 0 ?< h1>haiiiii[[/h1[ :< h1>vvvvvvvvvvvv</h1>]

<div className="card">
<button onclick=(CountInc}>
Decrement
</button>

<button onclick={CountInc}>
Increment
</button>