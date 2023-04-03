import Swal from 'sweetalert2'
import React, { useContext } from "react";
import { useEffect ,useState } from "react"
import { useParams} from "react-router-dom";
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from '../../firebaseConfig';
import "../Styles/ItemDetailContainer.css";
import { CartContext } from "../../context/CartContext";
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, obtenerCantidadById } = useContext(CartContext)

  const [productSelected, setProductSelected] = useState({})

  useEffect(() => {
    const itemCollection = collection(db, "Products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);
  

  const [items, setItems] = useState([]);

 
  const onAdd = (cantidad) => {

    let producto = {
      ...productSelected,
      cantidad


    }

    agregarAlCarrito(producto)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1000
    })
  };

  let cantidad = obtenerCantidadById(Number(id))
  
  return (
    <ItemDetail productSelected={productSelected} onAdd={onAdd} cantidad={cantidad}/>
  );
};

export default ItemDetailContainer;