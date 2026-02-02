import { useState } from "react";
import "./Accordion.css";

function Accordion() {
  const [data, setData] = useState([
    { title: "Accordion 1", con: "ihihggfdskjhkljhsdkfljhd" },
    { title: "Accordion 2", con: "ihihggfdskjhkljhsdkfljhd" },
    { title: "Accordion 3", con: "ihihggfdskjhkljhsdkfljhd" },
  ]);

  const [index, setIndex] = useState(null)

  let where = (x) => {
    setIndex(x)
    console.log(x);
    
  }
  return (
    <div className="main">
      {data.map((val,indx) => (
        <div className="btn">
        <h1>{val.title}<button onClick={() => where(indx)}>show</button></h1>
    {indx == index && <h1 className="content">{val.con}</h1>}
    </div>
    ))}
    </div>
  );
}

export default Accordion;
