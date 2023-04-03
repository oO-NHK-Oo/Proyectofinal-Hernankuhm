import Categorias from "./Components/Categoria/Categoria";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/Items/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Categorias />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/Categoria/:nombreCategoria"
            element={<ItemListContainer />}
            />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Formulario" element={<Form/>}/>
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
        </Routes>
       </CartContextProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
