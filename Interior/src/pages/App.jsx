import '../style/App.css'
import { useState } from 'react'
import img from '../images/photo1.png'
import imgArrow from '../images/001-right-arrow.png'
import imgMenu  from '../images/menu.png'
import imgPeaple from '../images/photo2.png'
import { Div } from '../components/mobile'
import { MenuHamburguer } from '../components/menu'

function App() {
  
  return (
    <Div >
      <header>
        <p className='rect'>THIS INTERIOR</p>
        <MenuHamburguer/>

        <nav className='NavBar'>
          <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Collection</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          </ul>
          </nav>
          <img className='menu' src={imgMenu} alt="logo" /> 
      </header>
      <main>
        <h1>Modern interior</h1>
        <p className='ParaTitle'>
        A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.
        </p>
        <a href="#" className='link'>
          <p>Read more <img className='arrow' src= {imgArrow} alt="" /> </p>
        </a>

        <section>
          <div>
          <img src={img} alt="" className='wrapper'/>
          </div>
          
          <div className='container'>
          <img className='imgPeaple' src={imgPeaple} alt="" />
          <p className='Name'>Aliza Webber</p>
          <p className='office'>Interior designer</p>
          <p className='descricao'>Designed in 2020 by Aliza Webber</p>
          </div>
        </section>
      </main>

      <footer>created by - NattanJunior</footer>
    </Div>
  )
}

export default App
