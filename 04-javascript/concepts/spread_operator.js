let arr = [1,2,3,4,5]

function spread(a,b,c,d)
{
    console.log(a,b,c,d,"hi");
    
}
spread(...arr)
// spread operator = "..."

//array value add
let arr1 = [10,20,30,40,50]
let arr2 = [...arr1,100,200]
console.log(arr2);

//array concatenation
let arr3 = [...arr,...arr1]
console.log(arr3);