function Header (prop) {
    // console.log(total)
    return (
        <header>
            <h1>To Do list</h1>
            <p> Total tasks: {prop.stat.total}; Tasks at work: {prop.stat.atWork}; Complete tasks: {prop.stat.complete} </p>
        </header>
    )
}

export default Header;
