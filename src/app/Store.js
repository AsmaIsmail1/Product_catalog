'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? { cart: JSON.parse(serializedState) } : undefined;
  } catch (e) {
    console.warn('Could not load state', e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
