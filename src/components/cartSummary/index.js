import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.product?.cartProduct);
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * 1, 0);
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}
    >
      <Typography variant='h6' gutterBottom>
        Cart Summary
      </Typography>

      <Typography variant='subtitle1' style={{ marginTop: '20px' }}>
        Total: Rs {getTotalPrice()}
      </Typography>
    </Paper>
  );
};

export default CartSummary;
