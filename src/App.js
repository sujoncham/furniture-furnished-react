<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
>>>>>>> 56e53649fed4f071166d832892e718d08e6c2caa
import './App.css';
import Header from './Header/Header';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Page404 from './Pages/Page404';
<<<<<<< HEAD
=======
import Shop from './Pages/Shop';
import Login from './SignUpOut/Login';
import SignUp from './SignUpOut/SignUp';
>>>>>>> 56e53649fed4f071166d832892e718d08e6c2caa

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <Header title="Furniture Shop"></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/order' element={<Order></Order>}></Route>
         <Route path='/login' element={<Blogs></Blogs>}></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='*' element={<Page404></Page404>}></Route>
       </Routes>
=======
      <Container>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </Container>
>>>>>>> 56e53649fed4f071166d832892e718d08e6c2caa
    </div>
  );
}

export default App;
