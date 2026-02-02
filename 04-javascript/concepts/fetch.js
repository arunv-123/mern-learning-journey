fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>console.log(data))

fetch('https://fakestoreapi.com/products/2')
.then(res=>res.json())
.then(data=>console.log(data))