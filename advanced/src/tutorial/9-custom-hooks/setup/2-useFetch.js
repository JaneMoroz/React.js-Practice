import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Just example
  // useCallback deals with infinite loop
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  // infinite loop because of getProducts
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
};
