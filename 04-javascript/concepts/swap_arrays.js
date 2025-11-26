let a = [1,2,3,4,5]
let b = [6,7,8,9,10]

for (let i = 0; i <= a.length-1; i++)
{
    temp = a[i]
    a[i] = b[i]
    b[i] = temp
}
console.log(a);
console.log(b);
