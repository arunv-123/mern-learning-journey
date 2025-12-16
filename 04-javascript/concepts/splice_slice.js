let arr = [1,2,3,4,5,6,7,8,9]
let arr1 = [1,2,3,4,5,6,7,8,9]

res = arr1.slice(2,5)//(strarting point, ending point(end index not included))
console.log(res);

spli = arr.splice(3,2)//(starting point,count) splice will delte the cutted index from the whole array
console.log(spli);
console.log(arr);

spliadd = arr.splice(2,1,500,600)
console.log(spliadd);
console.log(arr);


