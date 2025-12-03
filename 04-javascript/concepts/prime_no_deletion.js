let arr = [2,3,4,5,6,7,8,9,10]
for (let i = 0; i <= arr.length-1; i++)
{
    let isPrime = true
    for (let j = 2; j <= arr[i]-1; j++)
    {
    if (arr[i] % j == 0)
    {
        isPrime = false
        break
    }
    }
    if (isPrime == true)
{
    for (let k = i; k < arr.length; k++)
    {
        arr[k] = arr[k+1]
    }
    arr.length--
    i--
}
}
console.log(arr);
