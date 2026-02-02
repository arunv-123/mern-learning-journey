import { useState } from 'react'
import './delete_filter.css'
function Delete()
{
    const [obj, setObj] = useState([1,2,3,4,5,6,7])

    let del = (x) =>{

      let res = obj.filter((value,index)=>index!=x)
        setObj(res)
    } 
    return (
    <div>
        {
            obj.map((val,index)=>
                <>
                <h1>{val}</h1>

                <button onClick={() => del(index)}>delete</button>
</>
            )
        }
    </div>
    )
}

export default Delete