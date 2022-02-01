import { useState } from "react";
const SearchBox = (props) => {
   
    const[searchText,setSearchText]=useState()

    const handleChange=(e)=>{
       setSearchText(e.target.value)
    }
    return (
    <>
   <div className="input-group search-section">
    <div className="form-floating">
    
      <input type="text" id="form1" className="form-control search-text" value={searchText} onChange={handleChange} placeholder="search" />
      <label htmlFor="form1">Search</label>
    
    
  </div>
  {/* <div className="input-group-append"> */}
  <button type="button" className="btn btn-primary search-button" onClick={()=>props.HandleSearch(searchText)}>
   <i className="fa fa-search"></i>
 </button>
 {/* </div> */}
 </div>
   
 

 </>
  );
}
 
export default SearchBox;