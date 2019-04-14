import React from 'react';
import './SearchBox.css'
 const SearchBox=({searchfield, searchChange}) => {
  return (
    <div className='pa2' >
    <input
      className='pa3 '
      type = 'search'
      placeholder='    search here'
      onChange={searchChange}
    />
    </div>
  );
}

export default SearchBox;
