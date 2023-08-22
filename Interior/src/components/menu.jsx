import { useState } from "react";
import Menu from '../images/Menu.png'

export  const MenuHamburguer = ()=>{
    const [MenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!MenuOpen)
    }

    return(
        <div className={`hamburguer-menu ${MenuOpen? 'open': " "}`}>

        <nav className="NavBar">
            <img src={Menu} alt=""  onClick={toggleMenu}/>
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