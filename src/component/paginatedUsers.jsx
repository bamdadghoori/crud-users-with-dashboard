import { useSelector,useDispatch } from "react-redux";
import { GetUserRequest,GetUserFail,GetUserSuccess } from "../redux/users/usersAction";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';


const Items=({ Items,HandleDelete,HandleUpdate })=> {
  console.log(Items)
  // const state = useSelector(state => state)
  return (
    <>
     
      {
      
      Items &&
        Items.map((element,index) => (
          <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                       <div className="user">
                           <div className="row">
                           <div className="col-md-6 col-4">
                           <img src={element.avatar}/>
                         
                              </div>
                           <div className="col-md-6 col-4">
                              <div className="firstLast">
                          <div className="firstName">
                          {element.first_name} 
                       </div>
                       <div className="lastName">
                         {element.last_name} 
             
                         </div>
                          
                          </div>
                          
                              </div>
                              <div className="user-buttons col-md-12 col-4">
                              <button className="btn btn-primary btn-update" onClick={(e)=>{HandleUpdate(e,element.id)}}>
                                  Update
                              </button>
                              <button className="btn btn-danger btn-delete" onClick={(e)=>{ HandleDelete(e,element.id)}}>
                                  Delete
                              </button>
                          </div>
                            
                         
                       </div>
                         </div>
                         
                          </div>
        ))}
    </>
  );} 

const PaginatedUsers = () => {
    let navigate=useNavigate();
    // connecting to store
    const state = useSelector(state => state)
    
    const dispatch = useDispatch();
    var items=state.users
    
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=4;

    const test=()=>{
        
    }

  
    const getUsers=()=>{
        // async action using redux-thunk
        return async function(dispatch){
            try{
            
            dispatch(GetUserRequest())
             const response= await axios.get("https://reqres.in/api/users?page=2")
             
            
             dispatch(GetUserSuccess(response.data.data))
             return true;
            }
            catch(er){
                dispatch(GetUserFail(er))
               return false;
            }
        }
    }

    const handleUpdate=(e,id)=>{
       e.preventDefault()
       navigate(`/editUser/${id}`)
    }
    const handleDelete=(e,id)=>{
        navigate(`/deleteUser/${id}`)
    }
  useEffect(async()=>{
    
    dispatch(getUsers())
    console.log(state)
     console.log(items)
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // console.log(items.slice(itemOffset, endOffset))
    // setCurrentItems(items.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(items.length / itemsPerPage));
  }
    
  ,[itemOffset, itemsPerPage])

  
   
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
    return ( 
        <>
        
     
         <h5 className="users">Users:</h5>
         
         <div className="container">
         <div className="row">
        {console.log(currentItems)} 
            {
                state.loading===true ? (
                    <h1>is loading</h1>
                ):
                (
                  <>
                  <Items Items={items} HandleDelete={handleDelete} HandleUpdate={handleUpdate}/>
                  <ReactPaginate className='react-paginate'
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                   
                    renderOnZeroPageCount={null}
                    previousLabel="< Prev" 
                  />
               </>
               
            
                ) 
                
                }
             {/* <ReactPaginate className="react-paginate"
                        breakLabel="..."
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        previousLabel="< Prev" 
                      /> */}

         </div>
         </div>
        </>
   
    );
}
 
export default PaginatedUsers;