import { Link } from 'react-router-dom';

const linkStyle= {
    marginLeft:"50px",
    padding:"5px",
}

const anchorStyle = { 
    textDecoration:"none",
    color:"black",
}

const navStyle={
    textDecoration: "none",
    display:"flex",
    backgroundColor:'rgb(41, 136, 103)'
}

const Navbar = () =>{
    return(
        <div style={navStyle}>          
            <div style={linkStyle} >
              <Link style={anchorStyle} to="/">Home</Link>
            </div>   
            <div style={linkStyle} >
              <Link style={anchorStyle} to="/user">User</Link>
            </div>  
            <div style={linkStyle} >
              <Link style={anchorStyle} to="/about">About us</Link>
            </div>      
 
        </div>
    )
}

export default Navbar;
