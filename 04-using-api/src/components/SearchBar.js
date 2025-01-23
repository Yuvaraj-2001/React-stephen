import {useState} from 'react';
function SearchBar({update}){
    const [search, updateSearch] = useState();
    const searchQuery = () => {
        update(search)
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchQuery()
        }
      }
    return (
        <div className='search-container'>
             <div className='search-flex'>
            <input className="search-input" type="text" placeholder="Search..." 
                    onKeyUp={handleKeyPress} value={search}
                    onInput={(e) => updateSearch(e.target.value)}
                />
           <button className='btn' onClick={searchQuery}>Search</button>  {/* Call update with search value */}
        </div>
        </div>
       
    )
}

export default SearchBar;