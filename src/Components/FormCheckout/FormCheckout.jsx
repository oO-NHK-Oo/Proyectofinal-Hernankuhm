import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "../Styles/FormCheckout.css"

import Button from '@mui/material/Button';




const FormCheckout = ({ cart, totalPrecio, setOrderId, limpiarCarrito }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = totalPrecio();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        limpiarCarrito();
      })
      .catch((err) => console.log(err));

    cart.map((Product) => {
      let refDoc = doc(db, "Products", Product.id);
      updateDoc(refDoc, { stock: Product.stock - Product.cantidad});
      return Product
    });
  };

  return (
    <div className="Contenedor-formulario">
      <form className="Formulario" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        
        
        <Button type="submit" variant="outlined">Comprar</Button>
      
      </form>

    </div>
  );
};

export default FormCheckout;