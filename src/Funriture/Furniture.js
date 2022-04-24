import React, { useEffect, useState } from "react";
import "../App.css";
import Description from "../Description/Description";
import useProducts from "../Hooks/useProducts";
import FurnitureCart from "./FurnitureCart";
import FurnitureDetails from "./FurnitureDetails";

const Furniture = () => {
  const [furnitures, setFurnitures] = useProducts();
  const [carts, setCarts] = useState([]);
  const [rando, setRando] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/productCount/")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const addToCartHandle = (product) => {
    // console.log(product);
    const newCart = [...carts, product];
    if (newCart.length <= 4) {
      setCarts(newCart);
    } else {
      alert("not more than 4");
    }
  };

  const randomHandle = (rando) => {
    const randomProduct = Math.floor(Math.random() * rando.length);
    const newRando = carts[randomProduct];
    setRando(newRando);
  };

  const removeCartHandle = () => {
    const newCart = [];
    const newRando = [];
    setCarts(newCart);
    setRando(newRando);
  };

  return (
    <div className="main">
      <div className="product-items">
        <div className="product">
          <h3>Products:{furnitures.length}</h3>
          <div className="product-item">
            {furnitures.map((furniture) => (
              <FurnitureDetails
                key={furniture._id}
                furniture={furniture}
                addToCartHandle={addToCartHandle}
              ></FurnitureDetails>
            ))}
            <div className="pagination">
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  className={page === number ? "selected" : ""}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>
              ))}
              {size}
              <select onChange={(e) => setSize(e.target.value)} name="" id="">
                <option value="10">10</option>
                <option value="20" selected>
                  20
                </option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </div>
          </div>
          <Description></Description>
        </div>
        <div className="cart">
          <FurnitureCart
            rando={rando}
            randomHandle={randomHandle}
            removeCartHandle={removeCartHandle}
            carts={carts}
          ></FurnitureCart>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
