let arr = [1,2,3,4,5]
function destructure(a)
{
    let [c,b,d] = a;
    return c + d;
}

let x = destructure(arr);
console.log(x);
