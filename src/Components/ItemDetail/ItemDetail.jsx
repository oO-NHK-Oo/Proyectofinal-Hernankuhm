import React from 'react'
import Card from "@mui/material/Card";
import "../Styles/ItemCount.css";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productSelected, onAdd, cantidad}) => {
  return (
    <div>
        <div className="contenedor">
        <div>
          <Card className="Card-info" sx={{ width: 350, height: 450 }}>
            <CardMedia sx={{ height: 450 }} image={productSelected.img} />
          </Card>
          <ItemCount stock={productSelected.stock} initial={cantidad} onAdd={onAdd} />
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="texto-info">
          <h1>{`Nombre: ${productSelected.nombre}`}</h1>
          <h3>{`Categoria: ${productSelected.categoria}`}</h3>
          <h4>Idioma: </h4>
          <img
            id="imagen"
            class="post_flagen"
            src="https://www.gamestorrents.fm/wp-content/themes/GamesTorrent/css/images/flags/eng.png"
            title="Idioma English"
            alt="Idioma English"
          ></img>
        </div>

        {/* ----------------------------------------------------------- */}
      </div>
      <div>
        <h5 className="descripcion">{`Descripcion: ${productSelected.descripcion}`}</h5>
      </div>
    </div>
  )
}

export default ItemDetail