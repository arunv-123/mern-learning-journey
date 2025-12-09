arr = [1,4,5,7,4,5,11]
let count = 0
for (let i = 0; i < arr.length; i++)
{
    let unique = true
    for (let j = 0; j < arr.length; j++)
    {
        if (i == j)
        {
            continue
        }
        else if (arr[i] == arr[j])
        {
            unique = false
            break
        }
    }
    if (unique)
    {
        count++
    }
}
console.log(count);