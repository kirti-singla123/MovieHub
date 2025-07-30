import { createContext, useContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // ✅ Step 1: Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Step 2: Update localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (movie) => {
    setWishlist((prev) => {
      if (!prev.find((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// ✅ Optional custom hook (already good!)
export const useWishlist = () => useContext(WishlistContext);
