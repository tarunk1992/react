import './price.css'


function Price({handleFilterChange,setItem,data}){
    return(
        <div className='Price'>
        <h4>Price</h4>
        <div className='side-lable'>
            <label className='lable-container'>
              <input type='radio' name='text'  onClick={()=>setItem(data)}></input>
              <span className='checkmark'>All</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('50')} ></input>
              <span className='checkmark'>$0-$50</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('100')}></input>
              <span className='checkmark'>$50-$100</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text'  onClick={()=> handleFilterChange('150')}></input>
              <span className='checkmark'>$100-$150</span>
            </label>
            <label className='lable-container'  onClick={()=> handleFilterChange("black")}>
              <input type='radio' name='text'></input>
              <span className='checkmark'>Over$150</span>
            </label>
            </div>
        </div>
    )
}
export default Price