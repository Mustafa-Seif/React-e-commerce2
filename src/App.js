import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar/NavBar.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import NotFound from './components/not found/NotFound.jsx'
import Products from './components/products/Products.jsx'
import Product from './components/product details/Product';
import Counter from './components/counter/Counter';
import Cart from './components/cart/Cart';
import SignIn from './components/sign up/Signup.jsx';
import LogIn from './components/log in/LogIn';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/signUp" element={<SignIn/>}/>
      <Route path="/logIn" element={<LogIn/>}/>
      <Route  path="/products/:id" element={<Product />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

