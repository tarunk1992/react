import Nav from "./Navigation/Nav"
import Recommended from "./Recommended/Recommende"
import Product from "./products/Product"
import Sidebar from "./sidebar/Sidebar"
import data from './db/data'
import { useState } from "react"
import Category from "./sidebar/category/Category"


function Home(){
    const  [item,setItem]=useState(data);

    function onInputChange(e){
      
      if(e.target.value == ''){
       
        window.location.reload(true)
        const tempItem = item
        setItem(tempItem)
        
        return
      }
     const searchResult = item.filter(val => val.company.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()) || val.title.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()) || val.category.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()))
     setItem(searchResult);
    }
    
const handleFilterChange = (select) => {
    const updatedItems = data.filter(({category,color,company,newPrice,title})=>{
     return   category === select || color === select || company === select || newPrice === select
      || title === select ;
    });
    setItem(updatedItems)
 }



//    const handleFilterChange = (companyitem,companyprice,companycolor) => {
//       const updatedItems = data.filter((curel)=>{
//        return curel.company == companyitem || curel.newPrice === companyprice || curel.color === companycolor ;
//       });
//       setItem(updatedItems)
//    }
 

    return(
        <div >
            <Sidebar handleFilterChange={handleFilterChange} setItem={setItem} data={data} ></Sidebar>
        <Nav onInputChange={onInputChange}></Nav>
        <Recommended handleFilterChange={handleFilterChange} setItem={setItem} data={data}></Recommended>
        <Product item={item}></Product>
        
        </div>
    )
}
export default Home