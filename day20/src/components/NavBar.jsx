import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="flex items-center justify-center space-x-6 h-20 bg-black text-white text-xl  font-semibold ">
        <Link to="/" className="hover:text-sky-500">Home</Link>
        <Link to="/products" className="hover:text-sky-500">Products</Link>
        <a href="" className="hover:text-sky-500">About us</a>
      </div>
    </div>
  );
}

export default NavBar;
