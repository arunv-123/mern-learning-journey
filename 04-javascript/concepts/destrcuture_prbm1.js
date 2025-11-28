let obj = { name: "arun", age: 21, place: "ucity" }
function destructure(a) {
  let { name } = a;
  return name;
}
let x = destructure(obj);
console.log(x);
