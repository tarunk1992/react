import './Nav.css'
import {FiHeart} from 'react-icons/fi'
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Category from '../sidebar/category/Category';
import Sidebar from '../sidebar/Sidebar'
import Price from '../sidebar/price/Price';
import Color from '../sidebar/color/Color';


function Nav({onInputChange,handleFilterChange,setItem,data}){

   const [sideBar,setSideBar]= useState(false)

   function toggle(){
      setSideBar(!sideBar)
   }
    return(
      <section className='section'>
        <div className='container'>
         <div className='Navigation'>
         <div className='catCategory' >
       
        <GiHamburgerMenu className='togglebtn' onClick={toggle}/>
        {/* <RxCross2  className='togglebtn' /> */}
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
        <div className=''>
     
        <Category ></Category>
        <Price></Price>
        <Color></Color>
       
       </div>
       </nav>
        </div>
         <div className='logo'>
             <p>ShoesHouse</p>
            </div>
            <div className='Input'>
               <input type='text' placeholder='Search item by name and company'  
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
        </section>
    )
}
export default Nav