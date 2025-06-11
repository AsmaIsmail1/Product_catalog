// src/components/ProductCard.jsx
'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-2xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
