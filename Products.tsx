
import React, { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { useAppState } from '../Store/StoreContext';
import { saveProducts } from '../Store/action';

const Products = () => {
  const {dispatch, state} = useAppState() 
  useEffect(() => {
    try {
      const getProducts = async() => {
        const { data } = await axios.post("http://localhost:8080/products", {
          keyword: "",
          page_size: 20,
          page_number: 0,
        });
        dispatch(saveProducts(data.products))
      };
      getProducts()
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(state.products) 
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between'}}>
     {state.searchedProducts.length > 0 ? (
  state.searchedProducts.map((product: { id: React.Key | null | undefined; }, index: any) => (
    <Card key={product.id} product={product} />
  ))
) : (
  state.products.map((product: { id: React.Key | null | undefined; }, index: any) => (
    <Card key={product.id} product={product} />
  ))
)}
    </div>
  );
  };

export default Products;