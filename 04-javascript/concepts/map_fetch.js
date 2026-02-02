fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then( data=>data.map((products)=>{
    console.log(products.title)
})
)