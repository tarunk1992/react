import Category from './category/Category';
import Color from './color/Color'
import Price from './price/Price'
import './sidebar.css'


function Sidebar({handleFilterChange,setItem,data}){
    return(
       
           
            <section className='sidebar-containe'>
            <Category handleFilterChange={handleFilterChange} setItem={setItem} data={data}></Category>
            
            <Price handleFilterChange={handleFilterChange} setItem={setItem} data={data}></Price>
            <Color handleFilterChange={handleFilterChange} setItem={setItem} data={data}></Color>
            </section>
       
    )
}

export default Sidebar