import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import {useContext} from "react"

import "../Styles/CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {totalCantidad} = useContext(CartContext)

  const total = totalCantidad()


  return (
    <>
      <Link to={"/Cart"}>
        <span className="contador">{total}</span>
        <GiShoppingCart className="Widget" size={25} color="black" />
      </Link>
    </>
  );
};

export default CartWidget;
