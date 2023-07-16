import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
    <Link to="#" className='logo'>
      Logo
    </Link>

    <nav className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    </nav>
    
  </header>
  )
}

export default Header