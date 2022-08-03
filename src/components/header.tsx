import React from "react";
import { ToDoStat } from "../Store/statReducer";
  
  
function Header ({todoStat}:any) {
      
    
    return (
        <header>
            <h1>ToDo list</h1>
            <p> Created tasks: {todoStat.created}; Updated tasks: {todoStat.updated}; Deleted tasks: {todoStat.deleted} </p>
        </header>
    )
}

export default Header;
