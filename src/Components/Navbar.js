import React, {useContext} from 'react'
import { Container, Anchor, Icon } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from './Context/shopContext'

const Navbar = () => {

    const { openCart } = useContext(ShopContext)

    return (
        <>  
            <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
                <Link to="/"><Icon name="Store" size="50px" color="DarkBlue" />Shop</Link>
                <Link to="/products"><h1>Home</h1></Link>
                    <h1>Axcess Nutrition</h1>
                    <nav><Link to="/blogs" name="blogs"size="9px"><h1>Blogs</h1></Link></nav>
                 <nav>
                 <Anchor onClick={() => openCart()}><Icon name="Bag" size="50px"  color="RedBlue" /></Anchor>
                 <input type="text" placeholder="Search products.." name="search"></input>
                 <button type="submit"><i color="red" class="fa fa-search"></i></button>
                 </nav>
                 
   
               
            </Container>
        </>
    )
}

export default Navbar