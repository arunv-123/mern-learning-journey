let arr =  [3,7,5,11,10,2]
max = arr[0]
for (let i = 1; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i]
    }
}
console.log(max);