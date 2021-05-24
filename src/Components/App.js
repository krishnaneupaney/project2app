import MessengerCustomerChat from 'react-messenger-customer-chat';
import React from 'react';
import '../App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ShopProvider from './Context/shopContext'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import Navbar from './Navbar'
import Cart from './Cart'
import Blog from './Blog'

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();


const App = () => {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <div>
        {/* <h1>Axcess Nutrition Store</h1> */}
         </div>
        <Router>
          <Navbar />
          <Cart />
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route> 
            <div className="App">
              {/* <Navbar /> */}
              <Switch>
              <MessengerCustomerChat pageId="2225159177749234" appId="886930558821271"
  />
              <Route path="/blog">
                <Blog />
            </Route>
              </Switch>
            </div>
          </Switch>
          <Footer />
        </Router>
      </StyletronProvider>
      <MessengerCustomerChat pageId="2225159177749234" appId="265070795272994"
  />
    </ShopProvider>
  );
}

export default App;