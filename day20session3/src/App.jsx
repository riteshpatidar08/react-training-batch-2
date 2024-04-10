import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Product from './components/Product';
import Blogs from './components/Blogs';
import Aboutus from './components/Aboutus';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </>
  );
}

export default App;
