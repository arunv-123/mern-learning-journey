let a = [3,5,11,12]
// function reverse(a)
// {
//     let rev = []
//     j = 0
//     for (let i = 3; i >= 0; i--)
//     {
//         rev[j] = a[i]
//         j++
        
//     }
//     console.log(rev);   
// }

// reverse(arr)

// let rev = []
// let j = 0
// for (let i = 3; i >= 0; i--)
// {
//     rev[j] = a[i]
//     j++
// }
// console.log(rev);

let temp = 0; 
let j = 0
for (let i = 3; i > j; i--)
{
    temp = a[i]
    a[i] = a[j]
    a[j] = temp
    j++
}
console.log(a);



