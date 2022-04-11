import './App.css';
import Header from './Header/Header'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blogs from './Pages/Blogs'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Page404 from './Pages/Page404'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
    </div>
  );
}

export default App;
