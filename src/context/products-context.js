import React, { createContext, useState } from "react";

export const ProductsContext = createContext({ 
    products: [] ,
    toggleFavorite: (id) => {}
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleFavorite = (productId) => {
    setProductsList((currentProdlist) => {
      const prodIndex = currentProdlist.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdlist[prodIndex].isFavorite;
      const updatedProducts = [...currentProdlist];
      updatedProducts[prodIndex] = {
        ...currentProdlist[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
