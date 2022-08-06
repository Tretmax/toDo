
  import { useSelector } from "react-redux";

  
function Header () {
      
    const stats = useSelector((state:any) => {
        
        
        return state.statReducer
    })

   
 
    return (
        <header>
            <h1>ToDo list</h1>
            <p> Created tasks: {stats.created}; Updated tasks: {stats.updated}; Deleted tasks: {stats.deleted} </p>
        </header>
    )
}

export default Header;
