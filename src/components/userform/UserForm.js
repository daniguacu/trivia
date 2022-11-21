import {useState} from "react"
import axios from "axios"
import "./userform.css"
import { useNavigate,Link } from "react-router-dom"

const initinfo={
    name:"",
    email:""
}

const UserForm=()=>{
const navigate=useNavigate()
const[inputInfo,setinputInfo]=useState(initinfo)
const[message,setmessage]=useState("")
const handlerChangeForm = (field) => (e) =>
    setinputInfo({ ...inputInfo, [field]: e.target.value });
const save=async()=>{
    

    await axios.post( `http://localhost:3000/register`,inputInfo).then(response=>{

        if(response.data==="user exists"){
                       
            console.log(response.data)
            
            

        }else{
           
                        
            console.log(response.data)
            
        }
        
               
        
        
        
      }).catch(error=>{
        console.log(error)
      })
    
}

return(

    <>  
      <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48"></div>
              <form id="stripe-login">
                <div className="field padding-bottom--24">
                  <h3>Introduce tus datos</h3>
                  <label>Email</label>
                  <input type='text' value={inputInfo.email}onChange={handlerChangeForm("email")}/>
                </div>
                <div className="field padding-bottom--24">                 
                  <label>Name</label>               
                  <input type='text' value={inputInfo.name}onChange={handlerChangeForm("name")}/>
                </div>  
                
                <Link to="user"><button onClick={save}>Realizar encuesta</button></Link>
                           
              </form>
          </div>
          
      </div>    
    </>
)
}
export default UserForm