const Menu =()=>{

    return(
        <div>
            <ul >
                <li><NavLink className={(isActive)=>isActive?"active-item":"Pending-item"} to="/">Home</Navlink></li>
                <li><NavLink className={(isActive)=>isActive?"active-item":"Pending-item"} to="/about">About</Navlink></li>
                <li><NavLink className={(isActive)=>isActive?"active-item":"Pending-item"} to="/blog">Blog</Navlink></li>
                <li><NavLink className={(isActive)=>isActive?"active-item":"Pending-item"} to="/project">Project</Navlink></li>
                <li><NavLink className={(isActive)=>isActive?"active-item":"Pending-item"} to="/service">Service</Navlink></li>
                <li><NavLink className={(isActive)=>isActive?"active-item":"Pending-item"} to="/contact">Contact</Navlink></li>
            </ul>
        </div>
    )
}

export default Menu;
