import * as React from 'react';
import Typography from '@mui/joy/Typography';
import CartProductCard from '../../components/cartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../app/features/productSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.product?.cartProduct);
  const handleGotoHomepage = () => {
    navigate('/');
  };
  const handleDeleteItem = (id) => {
    console.log(id, 'id');
    dispatch(deleteProduct(id));
  };
  return (
    <Box>
      {!!cartProducts?.length &&
        cartProducts.map((ele) => (
          <CartProductCard {...ele} handleDeleteItem={handleDeleteItem} />
        ))}
      {cartProducts?.length === 0 && (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Typography>No Products in the cart!</Typography>
          <AddShoppingCartIcon fontSize='large' onClick={handleGotoHomepage} />
        </Box>
      )}
    </Box>
  );
}
