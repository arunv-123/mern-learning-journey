console.log("start");

async function fetchData() {

try {
let res = await fetch('https://fakestoreapi.com/products')
let data = await res.json()
console.log(data);
}

catch (error) {
}
}
fetchData()

//can be used in other cases too
try {
let obj={pame:"abc"}
console.log(obj.age.temp);
}
catch (error) {
}

console.log("end");