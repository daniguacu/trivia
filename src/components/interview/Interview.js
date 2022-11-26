import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./interview.css"
import Loading from "./Loading";
const initinfo=[{titulo:"",opciones:[{textorespuesta:"",iscorrect:false}]}]

const Interview=({puntuacion,setpuntuacion,preguntactual,setpreguntactual,isFinished,setisfinished,setlength})=>{
   
  const [question,setquestion]=useState(initinfo)
  
  const [loading, setLoading] = useState(false);
    
    const category=useParams()    
    const id=category.categoryId
   
    
    async function getquestion(){
        await axios.post(  `http://localhost:3000/interview/${id}`).then(response=>{
            
            console.log(response.data) 
            setquestion(response.data)
            setLoading(true);
            setlength(response.data.length)
                  
            setTimeout(() => {
              
              setLoading(false);
                console.log("1")
               
              }, "1000")
        }).catch(error=>{
              setquestion("Error")
        
        }
        )
    } 
    
    useEffect( () => {        
      getquestion();
    },[]);
    const submit=(iscorrect,e)=>{
      //añadir puntuacion
      if(iscorrect){
        puntuacion=puntuacion+1
        setpuntuacion(puntuacion)
      }
      e.target.classList.add(iscorrect?"correct":"incorrect")
      if(preguntactual==question.length-1){
        setisfinished(true)

      }else{
        preguntactual=preguntactual+1
        setpreguntactual(preguntactual)
      }

    }

    
    return(
        <>
        <div>
          

          <div >{question?(<><div className="titulo-pregunta">{question[preguntactual].titulo}</div><div className="lado-derecho">{question[preguntactual].opciones.map((respuesta)=>(<button key={respuesta.textorespuesta} onClick={(e)=>submit(respuesta.iscorrect,e)}>{respuesta.textorespuesta}</button>))}</div></>):(<div></div>)}</div>
             
        
          
          </div>
        
        
        
        
        </>

    )
}

export default Interview