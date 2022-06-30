function Header (prop) {
    // console.log(total)
    return (
        <header>
            <h1>ToDo list</h1>
            <p> Created tasks: {prop.stat.created}; Updated tasks: {prop.stat.updated}; Deleted tasks: {prop.stat.deleted} </p>
        </header>
    )
}

export default Header;
