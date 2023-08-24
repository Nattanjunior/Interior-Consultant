import { useState } from "react";
import imgMenu from '../images/menu.png'
import '../style/App.css'

export const Menu = ()=>{
    const [MenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!MenuOpen)
        if(MenuOpen == true){
            const menu = document.getElementById('nav-menu')
            menu.style.display = 'block'
           
        }else{
            const menu = document.getElementById('nav-menu')
            menu.style.display = 'none'
        }
    }
    return(
        <div>
            <div>
                <img className='imgMenu' src={imgMenu} alt=""  onClick={toggleMenu}/>
            </div>
            <div id="nav-menu">
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Collection</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}