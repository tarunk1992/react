
import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import data from "./db/data";



function Description(props){
 const [data,setData] =useState(data) 
  const {id} = useParams()

  const [product,setProduct]=useState()


//   useEffect(()=>{
//  const fetchData = async () =>{
//   const Data = {
//     data
//   };
//   setProduct(Data[id]);
//  };
//  fetchData();


    
// },[id])



    return(
        <>
        
       <h1>{product.name}</h1>
       <h1>hello tarun</h1>


   
        
        

     
    
        </>
    )
}
 export default Description;