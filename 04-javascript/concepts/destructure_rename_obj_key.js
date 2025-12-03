let name = ['abc','def','xyz']
let obj = {name:"arun", place:"kerala"}
// let {name} = obj; will be an error
let {name:test} = obj
console.log(name);
console.log(test);
