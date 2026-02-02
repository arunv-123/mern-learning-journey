fetch('https://fakestoreapi.com/products/5')
.then(res=>res.json())
.then( data=>{
    let a = [data]
    a.map((products)=>{
    console.log(products.title)
})
})