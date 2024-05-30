import './Nav.css'
import {FiHeart} from 'react-icons/fi'
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
function Nav({onInputChange}){
    return(
        <div className='Nav'>
         <div className='Navigation'>
            <div className='Input'>
               <input type='text' placeholder='Enter item'  
               onChange={onInputChange} ></input>
            </div>
            <div className='Icons'>
               <a href=''>
                  <FiHeart  className='icons'></FiHeart>
               </a>
               <a href=''>
            <FaShoppingCart  className='icons'></FaShoppingCart>
               </a>
               <a href=''>
                <AiOutlineUser className='icons'></AiOutlineUser>
               </a>


            </div>
        </div>
        </div>
    )
}
export default Nav