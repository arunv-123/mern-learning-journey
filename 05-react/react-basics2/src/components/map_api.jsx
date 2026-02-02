import { useEffect, useState } from "react";

function API()
{
        useEffect(()=>{
            const [title, setTitle] = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>console.log(json))
        })
    
        return(
            <>
            <h1>hi</h1></>
    )
}

export default API