const Items = (props) => {
    return ( 
        props.CurrentItems.map((element,index)=>{
                        return(
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
                                <button className="btn btn-primary btn-update" onClick={(e)=>{props.HandleUpdate(e,element.id)}} >
                                    Update
                                </button>
                                <button className="btn btn-danger btn-delete" onClick={(e)=>{props.HandleDelete(e,element.id)}}>
                                    Delete
                                </button>
                            </div>
                              
                           
                            </div>
                           </div>
                           
                            </div>
     );
}
        )
    )
}
 
export default Items;