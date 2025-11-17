let arr = [5,2,7,4,11,10]
for ( i = 0; i < arr.length; i++)
{
    for (j = i+1; j <= arr.length; j++)
    {
        if (arr[i]>arr[j])
        {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr);
