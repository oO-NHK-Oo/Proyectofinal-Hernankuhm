import { useState } from "react"

const Form = () => {

    const [userData, setUserData] = useState({nombre:"",email:"",password:""})
    const handLeChange = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value});
    }  

    

  return (
    <div>
        <form action="">
            <input type="text" placeholder="Ingrese su nombre" onChange={handLeChange} name="nombre" />
            <input type="text" placeholder="ingrese su email" onChange={handLeChange} name="email" />
            <input type="text" placeholder="ingrese su contraseña" onChange={handLeChange} name="password" />
            <button type="submit">Enviar</button>
        </form>
        
    </div>
  )
}

export default Form