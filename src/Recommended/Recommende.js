import { useState } from 'react';
import './Recommended.css'



function Recommended({handleFilterChange,setItem,data}){

   

    return(
      <div className='Recommended'>
        <h1>Recommended</h1>
        <div className='rec-btn'>
        <button  onClick={()=>setItem(data)} className='btns'>All Product</button>
        <button onClick={()=> handleFilterChange('Nike')} className='btns'>Nike</button>
        <button  onClick={()=> handleFilterChange('Adidas')}  className='btns'>Adidas</button>
        <button  onClick={()=> handleFilterChange('Puma')}  className='btns'>Puma</button>
        <button  onClick={()=> handleFilterChange('Vans')}  className='btns'>Vans</button>
        </div>
        </div> 
    )
}
export default Recommended