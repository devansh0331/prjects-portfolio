import React , {useState} from 'react'
import {AiOutlineAlignLeft , AiOutlineAlignRight} from "react-icons/ai"
import {Link} from "react-router-dom"

// import Loader from "./loader/Loader"

import "./Navbar.css"

function Navbar() {

    const [isOpen , setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className="navbar">
        <div className="navbar-title" onClick={handleToggle}>
            {!isOpen && <span><AiOutlineAlignLeft/></span>}
            {isOpen && <span><AiOutlineAlignRight/></span>}
        </div>
        <div className={isOpen ? "navbar-items" : "navbar-items"}>
            
        
      <ul className={isOpen ? "open" : ""}>
        {/* <span>myNav&#40;</span> */}
        <li> <Link to="/">Know Me &#124;</Link></li>
        <li> <Link to="/projects"> I have DONE &#124;</Link></li>
        <li> <Link to="/experience"> I am Also &#124;</Link></li>
        <li> <Link to=""> Why Me? &#124;</Link></li>
        <li> <Link to=""> Wanna Meet? &#124;</Link> </li>
        {/* <span>&#41;</span> */}
      </ul>
      </div>
   
    </div>
  )
}

export default Navbar
