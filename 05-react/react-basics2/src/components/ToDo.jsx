import { useState } from "react";
import "./ToDo.css";

function ToDo()
{
const [inputData, setInputData] = useState("")
const [allData, setAllData] = useState([])
let handleOnChange = (e) => {
    console.log("handleOnChange");
    setInputData(e.target.value)
}

let onSum = () => {
    let res = [...allData]
    res.push(inputData)

    setAllData(res)
}

let del = (x) => {
    let temp = allData.filter((value,index)=>index!=x)
    setAllData(temp)
    
}
    return (
        <div className="todo-container">
            <div>
                <input type="text" value = {inputData} onChange={handleOnChange}/>
                <button onClick={onSum}>ok</button>
            </div>

            {allData?.map((val,index) => (
                <div key = {index}>
                    <span>{val}</span>
                    <button>Edit</button>
                    <button onClick={()=>del(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default ToDo