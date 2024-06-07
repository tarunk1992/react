import './product.css'

import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import Recommended from '../Recommended/Recommende';
import { Link } from 'react-router-dom';
function Product({item}){
   

  
    return(
     <>
 
     <section className='Product'>
        <div className='container'>
         <div className='row'>
           {
            item.map((val,i)=>
               <div  key={i} className='col-lg-4 col-md-6 col-12'>
            <div className='Card' key={i}>
           <img className='image' src={val.img}></img>
           <div className='card-dtls'>
             <snap className='name'>
                {val.title}
             </snap>  <br></br>
             <snap className='name'>
                {val.company}
             </snap><br></br>
             <snap className='name'>
                {val.category}
             </snap>
             <h3 className='stars'>
               
             <FaStar className='star'></FaStar ><FaStar className='star'></FaStar><FaStar className='star'></FaStar><FaStar className='star'></FaStar>
             <span className='total-star'>{val.reviews}</span>
             </h3>
             <h3 className='price'>Price :  ${val.newPrice}</h3>
             <div className='btns'>
               <Link to={'/Description/'+val.id}> <button className='btns'>Add to Card</button></Link>
            
             </div>

           </div>
        </div>

            </div>
            )
           }
         </div>
        </div>
     </section>
     </>
    )
}
export default Product