'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../app/store';

export default function ReduxProvider({ children }) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const loadState = () => {
      try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? { cart: JSON.parse(serializedState) } : undefined;
      } catch {
        return undefined;
      }
    };

    const storeInstance = makeStore(loadState());

    storeInstance.subscribe(() => {
      try {
        const serialized = JSON.stringify(storeInstance.getState().cart);
        localStorage.setItem('cart', serialized);
      } catch {}
    });

    setStore(storeInstance);
  }, []);

  if (!store) return null;

  return <Provider store={store}>{children}</Provider>;
}