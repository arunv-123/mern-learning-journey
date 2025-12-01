let array = [1,2,3,4,5,6,7,8,9,10]
for (let i = 3; i < array.length-1; i++)
{
    array[i]=array[i+1]
}
array.pop()
console.log(JSON.stringify(array));

// let num =[1,2,3,4,5,6,7,8,9,10];
// for(let j=0;j<num.length;j++){
// if(num[j]==4){
// for(let i=j;i<num.length;i++){
//     num[i]=num[i+1];
// }
// }
// }
// num.pop();
// console.log(num);