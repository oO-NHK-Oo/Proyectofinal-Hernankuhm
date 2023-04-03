import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";


import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../../firebaseConfig";


const override = {
  display: "flex",
  justifyContent:"center",
  margin: "150px  auto",
  borderColor: "red",
  
  
};

const ItemListContainer = () => {

  const {nombreCategoria} = useParams();
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "Products");

    let consulta = undefined;

    if (nombreCategoria) {
      const q = query(itemsCollection, where("categoria", "==", nombreCategoria));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  
  }, [nombreCategoria]);  

  if (items.length === 0) {
    return  <PulseLoader
    color={"white"}
   // loading={loading}
    cssOverride={override}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
