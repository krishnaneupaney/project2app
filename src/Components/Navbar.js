import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Container, Icon } from 'atomize'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>

      <nav className='navbar'>
        <div className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Axcess Nutrition
            <i class='fas fa-store-alt' />
          </Link>


          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mission'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mission
              </Link>
            </li>
         
            <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            
          </ul>
          {/* <i class="fas fa-search"></i> */}
        
          {button && <Button buttonStyle='btn--outline' >LOGIN</Button>}
          
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;


// import React, {useContext} from 'react'
// import { Container, Anchor, Icon } from 'atomize'
// import { Link } from 'react-router-dom'
// import { ShopContext } from './Context/shopContext'

// const Navbar = () => {

//     const { openCart } = useContext(ShopContext)

//     return (
//         <>  
//             <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
//                 <Link to="/"><Icon name="Store" size="50px" color="DarkBlue" />Shop</Link>
//                 <Link to="/products"><h1>Home</h1></Link>
//                     <h1>Axcess Nutrition</h1>
//                     <nav><Link to="/blogs" name="blogs"size="9px"><h1>Blogs</h1></Link></nav>
//                  <nav>
//                  <Anchor onClick={() => openCart()}><Icon name="Bag" size="50px"  color="RedBlue" /></Anchor>
//                  <input type="text" placeholder="Search products.." name="search"></input>
//                  <button type="submit"><i color="red" class="fa fa-search"></i></button>
//                  </nav>
                 
   
               
//             </Container>
//         </>
//     )
// }

// export default Navbar