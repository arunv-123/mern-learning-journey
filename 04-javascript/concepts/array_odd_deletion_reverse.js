let array = [1,2,3,4,5,6,7,8,9,10]
for ( let i = 0; i <= array.length-1; i++)
{
    if (array[i] % 2 != 0)
    {
        for (let j = i; j <= array.length-1; j++)
        {
            array [j] = array[j+1]
        }
        array.length--
    }
}
for (let k = 0; k < array.length/2; k++)
{
    let temp = array[k]
    array[k] = array[array.length-1-k]
    array[array.length-1-k] = temp
}
console.log(array);
