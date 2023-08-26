import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { addProduct } from '../../app/features/productSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const getAllProduct = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      console.log(res, 'resonse');
      if (res.status === 200) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const handleAddCart = (id) => {
    const addedProduct = products.find((ele) => ele.id === id);
    console.log(id, addedProduct);
    dispatch(addProduct(addedProduct));
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 6 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {!!products.length &&
          products.map((ele, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              alignItems='center'
              justify='center'
            >
              <ProductCard {...ele} handleAddCart={handleAddCart} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
