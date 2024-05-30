import './Category.css'


function Category({handleFilterChange,setItem,data}){
    return(
        <div className='Category'>
        <h4>Category</h4>
        <div className='side-lable'>
            <label className='lable-container'>
              <input type='radio' name='text'  onClick={()=>setItem(data)}></input>
              <span className='checkmark'>All</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text'  onClick={()=> handleFilterChange('sneakers')}></input>
              <span className='checkmark'>Sneakers</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text'  onClick={()=> handleFilterChange('flats')}></input>
              <span className='checkmark'>Flats</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text'  onClick={()=> handleFilterChange('sandals')}></input>
              <span className='checkmark'>Sandals</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('heels')}></input>
              <span className='checkmark'>Heels</span>
            </label>
            </div>
        </div>

    )
}
export default Category