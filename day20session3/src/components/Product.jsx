import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Product() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="py-4 px-4 bg-red-500 m-10 rounded-lg text-white font-semibold"
      >
        Go Back
      </button>
      <Link className="hover:underline ">Product 1</Link>
      <Link className="hover:underline ">Product 2</Link>
      <Link className="hover:underline ">Product 3</Link>
    </div>
  );
}

export default Product;
