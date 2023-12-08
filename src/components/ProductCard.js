import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [InCart, setInCart] = useState(false);
  const { id, name, price, image } = product;
  // using useEffect to render the changes
  // using find() to get details of the cartlist product
  useEffect(
    () => {
      const productInCart = cartList.find((product) => product.id === id);
      // if productInCart is true, product is in the cartlist else it is not
      if (productInCart) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    },
    [cartList, id] // useEffect dependencies
  ); // updates the InCart value

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {InCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
