import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../Styles/ItemList.css";

import { Link } from "react-router-dom";

const ItemCard = ({ element }) => {
  return (
    <Card className="Card" sx={{ width: 300, height: 510 }}>
      <CardMedia sx={{ height: 350 }} image={element.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`Precio: ${element.precio} $`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {}
        </Typography>
      </CardContent>
      <div className="contenedor-leerMas">
      <Link to={`/itemDetail/${element.id}`}>
        <Button className="leerMas" variant="contained">
          Leer mas
        </Button>
      </Link>
      </div>

    </Card>
  );
};

export default ItemCard;
