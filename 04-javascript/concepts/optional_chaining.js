let obj = {name:"arun"}
// console.log(obj.age.name);error because age and tempo keys dont exist

//optional chaining
console.log(obj.age?.name);//name is not getting printed because it is not getting accessed at all "obj.name"
console.log(obj.name);

