function smallest(a,b,c)
{
    if (a<b && a<c)
    {
        return [a,"is the smallest"]
    }
    else if (b<c && b<a)
    {
        return [b,"is the smallest"]
            
    }
    else
    {
        return [c,"is the smallest"]
        
    }
}
let x = smallest(18,5,9)
console.log(x);
