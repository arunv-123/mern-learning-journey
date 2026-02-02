async function fetchData() {

try {
let res = await fetch('https://fakestoreapi.com/products')
let data = await res.json()
    data.map((x)=>{
        console.log(x.title);
        
    })
}

catch (error) {
}
}
fetchData()