import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';

import './navBar.css'


function NavBar() {
const counterGlobalValue = useSelector((state)=>state.counterStore.counter);

  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Link className='fs-5 text-dark me-5' to="/">Shop.com</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-dark ms-2 link' to="/">Home</Link>
            <Link className='text-dark ms-2 link' to="/about">About</Link>
            <Link className='text-dark ms-2 link' to="/products">Products</Link>
            <Link className='text-dark ms-2 link' to="/counter">Counter <span className=' text-light'>( {counterGlobalValue} )</span></Link>
            <Link className='text-dark ms-2 link' to="/cart">cart <FaShoppingCart /></Link>
            <Link className='text-dark ms-2 link' to="/contact">Contact</Link>
          </Nav>
          <Link className='text-dark ms-2 me-4' to="/logIn">logIn <FaSignInAlt/></Link>
          <Link className='text-dark ms-2' to="/signUp">Sign up <FaSignInAlt/></Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;