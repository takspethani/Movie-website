import React from 'react';
import './search.css';

function Search() {
  return (
    <div className='search'>
      <input type="text" placeholder='Search name' />
      <ion-icon name='search-outline'></ion-icon>
    </div>
  );
}

export default Search;
