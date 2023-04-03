import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import "../Styles/Carrito.css";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";


const Cart = () => {
  
  const { cart, limpiarCarrito, totalPrecio, eliminarProductoById } =
    useContext(CartContext);
  
  const [mostrarFormCheckout, setMostrarFormCheckout] = useState(false);
  
  const precioTotal = totalPrecio();
  const [ orderId, setOrderId ] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "estas seguro de eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Se elimino el carrito exitosamente", "", "success");
        limpiarCarrito();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  if(orderId){
    return(
      
      <div className="confirmar-compra">
        <h2>Gracias por comprar en NHK</h2>
        <h4 className="orden-de-compra">Su orden de compra: {orderId}</h4>
        <Link to="/">
        <Button  variant="outlined">Seguir comprando</Button>
        </Link>
      </div>
      
    )
  }


  return (
    <div>
      {!mostrarFormCheckout ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((elemento) => {
              return (
                <div key={elemento.id} className="cart-item">
                  <img src={elemento.img} />
                  <div className="cart-item-info">
                    <h2>{elemento.nombre}</h2>
                    {/*<h3>Categoria:{elemento.categoria}</h3>*/}
                    <h4>Cantidad: {elemento.cantidad}</h4>
                    <h5>Precio: {elemento.precio}</h5>
                    <Button onClick={()=> eliminarProductoById(elemento.id)} variant="contained">Eliminar</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-info">
            <h3>Precio total: {totalPrecio()}</h3>
            <h3>Descuento: - </h3>
            <h3>Precio final: -</h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={()=>setMostrarFormCheckout(true)}>Comprar</Button>
                <Button onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}

            <h1>el precio total es: {precioTotal}</h1>
          </div>
        </div>
      ) : (
        <FormCheckout  cart={cart} totalPrecio={totalPrecio} setOrderId={setOrderId} limpiarCarrito={limpiarCarrito}/>
      )}
    </div>
  );
};

export default Cart;
