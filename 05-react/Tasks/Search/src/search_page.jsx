import { useEffect, useState } from "react";
import "./search_page.css";

function Search() {
  const [products, setProducts] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTemp(data);
      });
  }, []);

  let handleChange = (e) => {
    let res = temp.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(res)
  }
  return (
    <>
      <div className="body">
        <div className="phone-body">
          <div className="volume"></div>
          <div className="notch"></div>
          <div className="screen">
            <div className="search">
              <input type="text" placeholder="Search..." onChange={handleChange}/>
            </div>
            <div className="items">
              <div className="item">
                {products.map((val, ind) => (
                  <p>{val.title}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
