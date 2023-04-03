import "../Styles/ItemCount.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

 

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <div className="contador">
        <Button onClick={restar} variant="outlined">
          -
        </Button>
        <h5>{contador}</h5>
        <Button onClick={sumar} variant="outlined">
          +
        </Button>
      </div>
      <div className="boton-carrito">
        <Button onClick={() => onAdd(contador)} variant="contained">Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;
