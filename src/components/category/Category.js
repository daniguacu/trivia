import { useEffect, useState } from "react"
import axios from "axios"
import "./category.css"
import geo from "../../images/geo.png"
import ent from "../../images/ent.jpg"
import cul from "../../images/cul.jpg"



const Category=()=>{
    const [category,setcategory]=useState([])
    const images=[geo,ent,cul]
    

    async function getcategory(){
        await axios.get( `http://localhost:3000/category`).then(response=>{
            setcategory(response.data)
            console.log(category)
            
            
            setTimeout(() => {
                console.log("1")
               
              }, "1000")

        
        
        
      }).catch(error=>{
        setcategory("Error")
        
      })}
   
    

    useEffect( () => {
        
      getcategory();
      },[]);
    return(
        <>
        <h3>Elige una categoría</h3>
        
        <ul>
        {category.map((category, index) => {
          return (
            
             <li key={index}>
                
              {category ? (
                    <> 
                    <img src={images[index]} className="cardimage"></img>        
                    <div>{category.name}</div>
                    </> 
                  
                  
                
              ) : (
                <div></div>
              )}
            </li>
            
          );
        })}
        </ul>
      
        
        </>
        
    )
}

export default Category