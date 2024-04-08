import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index}`}
            className="w-48 h-auto rounded-md"
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600">Price: {product.price}</p>
      <p className="text-gray-600">Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
