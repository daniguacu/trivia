import {useState} from "react"
import axios from "axios"

const initinfo={
    name:"",
    email:""
}

const UserForm=()=>{
const[inputInfo,setinputInfo]=useState(initinfo)
const handlerChangeForm = (field) => (e) =>
    setinputInfo({ ...inputInfo, [field]: e.target.value });
const save=async()=>{
    

    await axios.post( `http://localhost:3000/register`,inputInfo).then(response=>{
        
        console.log(response.data)       
        
        
        
      }).catch(error=>{
        console.log(error)
      })
    
}

return(

    <>
    
    <label>Introduzca su Nombre<input type='text' value={inputInfo.name}onChange={handlerChangeForm("name")}/></label>
    <label>Introduzca su email<input type='text' value={inputInfo.email}onChange={handlerChangeForm("email")}/></label>
    <button onClick={save}>Realizar encuesta</button>
    
    </>
)
}
export default UserForm