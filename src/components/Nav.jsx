import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';  
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';

export default function Navegacion(){
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
    return(
        
      <div className='nav'>
          <ul className='nav-hidden'>

          
            
          <li>
              <Link to='Home' smooth={true} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to='About' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to='Skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to='Work' smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li>
              <Link to='Contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

           {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'mobile-menu'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='Home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='About' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

     

      </div>

      
        

    
      
   
        
    )
}