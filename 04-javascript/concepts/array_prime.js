let sum = 0
let arr = [2,3,4,5,6,7,8,9,10]
for (let i = 0; i < arr.length; i++)
    {
    let isPrime = true
    for (let j = 2; j < arr[i]; j++)
    {
        if (arr[i] % j === 0)
        {
            isPrime = false
            break
        }
    }
    if(isPrime)
    {
        sum += arr[i]
    }
}
console.log(sum);
