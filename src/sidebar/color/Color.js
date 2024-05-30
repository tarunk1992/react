import './color.css'


function Color({handleFilterChange,setItem,data}){
    return(
        <div className='Color'>
        <h4>Color</h4>
        <div className='side-lable'>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=>setItem(data)}></input>
              <span className='checkmark'>All</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('black')}></input>
              <span className='checkmark'>Black</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('blue')}></input>
              <span className='checkmark'>Blue</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('red')}></input>
              <span className='checkmark'>Red</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('green')}></input>
              <span className='checkmark'>Green</span>
            </label>
            <label className='lable-container'>
              <input type='radio' name='text' onClick={()=> handleFilterChange('white')}></input>
              <span className='checkmark'>White</span>
            </label>
            </div>
        </div>
    )
}
export default Color