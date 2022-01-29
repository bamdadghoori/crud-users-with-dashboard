import classNames from "classnames";
import { useState } from "react";

const PaginationButton = (props) => {
 
    
    console.log(props.IsPressed
    )
    var btnClass = classNames({
        "page-link": true,
        "active":props.IsPressed,
        // 'btn-pressed': this.state.isPressed,
        // 'btn-over': !this.state.isPressed && this.state.isHovered
      });
    return (  <li className={btnClass} onClick={props.ChangePage}>
            
        {props.Element}
         </li> );
}
 
export default PaginationButton;