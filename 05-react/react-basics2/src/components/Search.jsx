import { useState, useEffect } from "react";
import "./search.css"

function Search()
{
    const [products, setProducts] = useState([])
    const [temp, setTemp] = useState([])
    useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then((data) => {
                setProducts(data);
                setTemp(data);
            });
        },[]);

        const [searchValue, setSearchValue] = useState("")
        let handleChange = (e) => {            
            const res = temp.filter(data=>data.title.toLowerCase().includes(e.target.value.toLowerCase()))            
            setProducts(res)
        }
    return(
        <>
        <input type="text" placeholder="Search..."  onChange={handleChange}/>
        {
            products.map((val,ind)=>
                <h2>{val.title}</h2>
            )
        }
        </>
    )
}

export default Search