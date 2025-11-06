import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  category?: number | string;
  description?: string;
}

interface FavouritesContextType {
  favourites: Product[];
  addFavourite: (product: Product) => void;
  removeFavourite: (id: number) => void;
  isFavourite: (id: number) => boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(
  undefined
);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  const addFavourite = (product: Product) => {
    setFavourites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFavourite = (id: number) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  const isFavourite = (id: number) => {
    return favourites.some((p) => p.id === id);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context)
    throw new Error("useFavourites must be used within FavouritesProvider");
  return context;
};
