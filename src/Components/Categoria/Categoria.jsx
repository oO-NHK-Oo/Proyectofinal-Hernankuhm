import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Categorias.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Categorias = ({ children }) => {
  const [listaCategoria, setListaCategoria] = useState([]);
  const [Cate, setCate] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "Categorias");
    getDocs(itemsCollection).then((res) => {
      let arrayCategorias = res.docs.map((Categoria) => {
        return {
          ...Categoria.data(),
          id: Categoria.id,
        };
      });
      setListaCategoria(arrayCategorias);
      //     // ESTO ES NUEVO
      const firstCat =
        listaCategoria.length > 0 &&
        listaCategoria.find((e) => e.title === "Todos");
      const otherCat =
        listaCategoria.length > 0 &&
        listaCategoria.filter((e) => e.title !== "Todos");
      if (listaCategoria.length > 0) {
        setCate([firstCat, ...otherCat]);
      }
    });
  }, [listaCategoria]);
  const cate = [
    {
      titulo: "Todos",
      path: "/",
      id: 1,
    },
    {
      titulo: "Accion",
      path: "/Categoria/Accion",
      id: 2,
    },
    {
      titulo: "Aventuras",
      path: "/Categoria/Aventuras",
      id: 3,
    },
    {
      titulo: "Simulacion",
      path: "/Categoria/Simulacion",
      id: 1,
    },
    {
      titulo: "Deportes",
      path: "/Categoria/Deportes",
      id: 2,
    },
    {
      titulo: "Conduccion",
      path: "/Categoria/Conduccion",
      id: 3,
    },
  ];

  return (
    <div>
      <ul className="listado-categorias">
        {cate?.map((Categoria) => {
          return (
            <Link key={Categoria.id} to={Categoria.path}>
              {Categoria.titulo}
            </Link>
          );
        })}
      </ul>

      {children}
    </div>
  );
};

export default Categorias;
