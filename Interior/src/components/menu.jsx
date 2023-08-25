import { useState } from "react";
import imgMenu from '../images/menu.png'
import '../style/App.css'
import x from '../images/close.png'

export const Menu = ()=>{
    const [MenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!MenuOpen)
        if(MenuOpen == true){
            const menu = document.getElementById('nav-menu');
            menu.style.display = 'block';
            
        }else{
            const menu = document.getElementById('nav-menu');
            menu.style.display = 'none';
        }
    }
    return(
        <div>
            <div>
                <img className='imgMenu' id="imagemMenu" src={imgMenu} alt=""  onClick={toggleMenu}/>
            </div>
            <div id="nav-menu">
                <nav>
                <img src={x} alt=""  id="imagem-X" onClick={toggleMenu}/>
                    <ul>
                        <li><a href="#" className="Home">Home</a></li>
                        <li><a href="#" className="Collection">Collection</a></li>
                        <li><a href="#" className="About">About</a></li>
                        <li><a href="#" className="Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}