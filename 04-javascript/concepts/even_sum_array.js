let array = [2,3,1,4,5,6,8,9,7]
let sum = null
for ( i = 0; i < array.length; i++)
{
    if ( array[i] % 2 == 0)
    {
        sum += array[i]
    }
}
console.log(sum);
