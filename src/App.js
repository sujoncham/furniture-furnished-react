import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Page404 from './Pages/Page404';
import Shop from './Pages/Shop';

function App() {

  return (
    <div className="App">
      <Header title="Furniture Shop"></Header>
      <Container>
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>

          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
