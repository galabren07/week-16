import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return(
       <nav className="navbar">
        <h3 className='logo'> Logo</h3>

        <ul className="navLinks">
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/book'><li>Book</li></Link>
        <Link to='/bookList'><li>BookList</li></Link>
        </ul>
       </nav>
    )
}
export default Navbar