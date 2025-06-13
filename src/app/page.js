'use client';

import React from 'react';
import ProductList from '../app/components/ProductList';
import Cart from '../app/components/Cart';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center pt-8">🛍️ Product Catalog</h1>
      <section className="max-w-6xl mx-auto py-8">
        <ProductList />
        <div className="mt-12">
          <Cart />
        </div>
      </section>
    </main>
  );
};

export default Home;