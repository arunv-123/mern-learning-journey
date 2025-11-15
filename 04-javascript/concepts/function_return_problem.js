function even_odd(a,b)
{
    let sum= a + b;
    if(sum % 2 == 0)
    {
        return ["This is even",sum]
    }
    else{
        return "This is odd"
    }
    
}
let x = even_odd(4,8)
console.log(x[0]);

let y = even_odd(5,2)
console.log(y);