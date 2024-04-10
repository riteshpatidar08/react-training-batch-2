import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Fade } from 'react-awesome-reveal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);

        const uniqueCategories = [
          ...new Set(response.data.products.map((product) => product.category)),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1 className="text-center text-3xl mt-10 font-bold">Products</h1>
      <div className=" flex justify-center items-center gap-4 mt-6">
        <span className="text-2xl mb-6 font-semibold">Filter by Category:</span>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border-sky-500 border-2 rounded-md"
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option className="font-semibold" key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-4 justify-center items-center gap-4 bg-gray-50 p-10">
        {filteredProducts.map((product) => (
          <Fade key={product.id} triggerOnce fraction={0.5}>
            <div className="product-card  flex flex-col items-center justify-center shadow-xl p-4">
              <Link to={`/products/${product.id}`}>
                {' '}
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-md"
                />
              </Link>
              <div className="m-3 flex items-center justify-center gap-4 flex-col">
                <Link
                  to={`/products/${product.id}`}
                  className="text-xl text-sky-500 font-bold"
                >
                  {' '}
                  {product.title}
                </Link>
                <p>Price: {product.price}</p>
                <button className="bg-sky-500 px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
