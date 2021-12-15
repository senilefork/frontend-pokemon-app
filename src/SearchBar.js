import "./SearchBar.css";

const SearchBar = ({ searchFilter, setSearchInput, searchInput }) =>{
    const handleChange = (e) => {
      setSearchInput(e.target.value)
      searchFilter(searchInput)   
    }
    return(
      <div className="search-bar-container">
        <form>
          <input onChange={handleChange} placeholder="search" />
        </form>
      </div>
    )
}

export default SearchBar;