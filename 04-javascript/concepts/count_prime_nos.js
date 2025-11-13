let count = 0

for (num = 2; num <= 20; num++)
    {
    let prime = true
    for (i = 2; i < num; i++)
    {
        if ( num % i === 0)
        {
            prime = false
            break;
        }
    }
    if(prime)
    {
        count++;
    }
}
console.log(count);
