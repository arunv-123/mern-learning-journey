import { useState } from "react";

function ArrayObjects() {
    const [obj, setObj] = useState([{name:"Arun",age:21},{name:"Aarsh",age:20}])
  return (
    <div>
        {
            obj.map((val)=>
                <h1>{val.name}</h1>
            )
        }
    </div>
  );
}

export default ArrayObjects;
