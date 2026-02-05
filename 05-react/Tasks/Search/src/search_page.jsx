import { useEffect, useState } from "react";
import "./search_page.css";

function Search() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <div className="body">
        <div className="phone-body">
          <div className="volume"></div>
          <div className="notch"></div>
          <div className="screen">
            <div className="search">
              <input type="text" placeholder="Search..." />
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
