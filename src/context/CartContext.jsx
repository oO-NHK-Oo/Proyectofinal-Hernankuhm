import { createContext, useState } from "react"


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    //funcion para agregar al carrito
    const agregarAlCarrito = (producto)=>{
      let existe = isInCart(producto.id)
         
      if(existe){ 

        let newCart = cart.map((elemento)=>{
          if(elemento.id === producto.id){
            return{
              ...elemento,
              cantidad: producto.cantidad,
            }
          }else{
            return elemento;
          }
        })

        setCart(newCart)

      }else{
        setCart([...cart, producto]);

      }
    }


    //funcion para saber si existe un producto en el carrito
    const isInCart = (id)=>{
      return cart.some(elemento => elemento.id === id)
      
    }

    //funcion para limpiar el carrito
    const limpiarCarrito = ()=>{
      setCart([])
    }

    //funcion para el total de elemento del carrito
    const totalCantidad = ()=>{

      const total = cart.reduce((acc, elemento)=>{
        return acc + elemento.cantidad
      },0 )

      return total
    }


    const totalPrecio = ()=>{

      let precioTotal = cart.reduce((acc, elemento)=>{
        return acc + (elemento.cantidad * elemento.precio)
      },0 )
      return precioTotal
    }


    const eliminarProductoById = (id)=>{
      const newcart = cart.filter((element)=>element.id !== id)
      setCart(newcart)
    }


    const obtenerCantidadById = (id)=>{
      const productSelected = cart.find( (element)=> element.id === id ) 
      return productSelected?.cantidad
    }


    let data = {
      cart: cart,
      agregarAlCarrito,
      limpiarCarrito,
      totalCantidad,
      totalPrecio,
      eliminarProductoById,
      obtenerCantidadById

     
    }


  return (
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider