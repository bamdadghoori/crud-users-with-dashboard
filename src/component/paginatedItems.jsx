import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector,useDispatch, Provider } from "react-redux";
import { Show } from '../redux/users/usersAction';


// const Items=({ CurrentItems,HandleDelete,HandleUpdate })=> {
//   const dispatch= useDispatch();
//   const state=useSelector(state=>state)
//   const [show,setShow]=useState([]);
//   console.log(CurrentItems)
//   useEffect(()=>{
//    setShow(CurrentItems)    
//   },[CurrentItems])
  
  
//     return (
//       <>
//      {console.log(state.show)} 
//         {CurrentItems ? (
//  CurrentItems.map((element,index) => (
//   <div key={index} className="col-md-6 col-lg-4 col-xl-3">
//                <div className="user">
//                    <div className="row">
//                    <div className="col-md-6 col-4">
//                    <img src={element.avatar}/>
                 
//                       </div>
//                    <div className="col-md-6 col-4">
//                       <div className="firstLast">
//                   <div className="firstName">
//                   {element.first_name} 
//                </div>
//                <div className="lastName">
//                  {element.last_name} 
     
//                  </div>
                  
//                   </div>
                  
//                       </div>
//                       <div className="user-buttons col-md-12 col-4">
//                       <button className="btn btn-primary btn-update" onClick={(e)=>{HandleUpdate(e,element.id)}}>
//                           Update
//                       </button>
//                       <button className="btn btn-danger btn-delete" onClick={(e)=>{HandleDelete(e,element.id)}}>
//                           Delete
//                       </button>
//                   </div>
                    
                 
//                </div>
//                  </div>
                 
//                   </div>
// ))
//         ):(
//           <h1>is loading</h1>
//         )
//          }
//       </>
//     );}
const PaginatedItems = (props) => {
  const items = useSelector(state => state.users)
  
      const dispatch= useDispatch();
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=4;
    
    useEffect(() => {
      console.log(items)
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        console.log(currentItems)
      
        setPageCount(Math.ceil(items.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);


      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };

    return (<>
    {
       
    }
{/*    
        <Items CurrentItems={currentItems} HandleDelete={props.HandleDelete}  HandleUpdate={props.HandleUpdate}/>
        <ReactPaginate className='react-paginate'
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
         
          renderOnZeroPageCount={null}
          previousLabel="< Prev"
          // forcePage={items}
        /> */}
     
      </>
      
  );
}
 
export default PaginatedItems;
