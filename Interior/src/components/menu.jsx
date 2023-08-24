import { useState } from "react";
import menuIcon from '../images/menu.png'
import  '../style/App.css' 

export  const MenuHamburguer = ()=>{
    const [MenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!MenuOpen)
        const element = document.getElementsByClassName('NavBar')
        return element

    }

    return(
        <div className={`hamburguer-menu ${MenuOpen? 'open': " "}`}>

        <div className="menu-icon" onClick={toggleMenu}>

        </div>
        <nav className="NavBar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        </div>
    )

} 