let arr = [1,2,3,4,5]
let res = [...arr]
let [a,b,...rest] = arr
console.log(a,b);
console.log(rest);


function Test(x,y,...rest)
{
    console.log(x,y,...rest);
    
}
Test(...arr)