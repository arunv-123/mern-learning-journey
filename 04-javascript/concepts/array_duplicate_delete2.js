arr = [1,4,5,7,4,5,11]
for (let i = 0; i < arr.length; i++)
{
    for (let j = 0; j < arr.length; j++)
    {
        if (i == j)
        {
            continue
        }
        else if (arr[i] == arr[j])
        {
            for (let k = i; k < arr.length; k++)
            {
                arr[k] = arr[k+1]
            }
            arr.length--
            j--
            for (let h = j; h < arr.length; h++)
            {
                arr[h] = arr[h+1]
            }
            arr.length--
            i--
        }
    }
}
console.log(arr);