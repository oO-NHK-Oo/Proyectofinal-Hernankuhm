import React from "react";
import "../../Styles/ItemList.css";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ items }) => {
  return (
    <div className="tarjeta-de-productos">
      {items.map((element) => {
        return (
          <>
            <ItemCard key={element.id} element={element} />
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
