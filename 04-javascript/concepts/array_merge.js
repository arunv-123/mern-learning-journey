let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
for (let i = 0; i < arr2.length; i++)
{
    arr1.push(arr2[i])
}
for (let i = 0; i < arr1.length; i++)
{
    arr2.push(arr1[i])
}


console.log(arr1);
console.log(arr2);


// let arr3 = arr1+ arr2
// console.log(arr3);
