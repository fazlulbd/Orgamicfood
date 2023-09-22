import React, { useContext } from 'react'
import { Container, Navbar, Nav, Badge, Dropdown } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Manubar = () => {
  const { cartstate } = useContext(Store)
  const { cart } = cartstate
  return (
    <Navbar expand="lg" className="bg-body-tertiary main_manu">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to='/' as={Link}>Home</Nav.Link>
            <Nav.Link to='/about' as={Link}>About</Nav.Link>
            <Nav.Link to='/shop' as={Link}>Shop</Nav.Link>
            <Nav.Link to='/contact' as={Link} >Contact</Nav.Link>
            {/* <Nav.Link to='/login' as={Link} ><BiUserCircle className='nav-icom' /></Nav.Link> */}
            
            <Dropdown>
            <Dropdown.Toggle variant="string" id="dropdown-basic">
              <BiUserCircle className='nav-icom' />
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item to='/login' as={Link}>Login</Dropdown.Item>
                <Dropdown.Item to='/registration' as={Link}>Sign Up</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Manage My Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link to='/cart' as={Link} ><AiOutlineShoppingCart className='nav-icom' />
              {
                cart.cartItems.length < 1 ? ""
                  :
                  <Badge pill bg="dark">{cart.cartItems.length}</Badge>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Manubar
