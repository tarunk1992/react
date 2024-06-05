

function Sidenev ({handleFilterChange,setItem,data,onClick}){
    return(
     
     <div className='Sidenev' onClick={onClick}>

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

  </div>

    )
}

export  default Sidenev;