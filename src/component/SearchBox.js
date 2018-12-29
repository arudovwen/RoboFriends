import React from 'react';




const SearchBox=({ searchChange})=>{
    return(
        <div className='pa3'>
            <input type='search' placeholder='Find Robot' 
                  className='pa3 ba b--green bg-lightest-blue '
                      onChange={searchChange}
                  />
        </div>
    )
}

export default SearchBox;