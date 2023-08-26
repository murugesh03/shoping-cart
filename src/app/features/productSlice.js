import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProduct: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.cartProduct = [
        ...state.cartProduct,
        { ...action.payload, quantity: 1 }
      ];
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      console.log(productId);
      const index = state.cartProduct.findIndex((ele) => ele.id === productId);
      if (index !== -1) {
        state.cartProduct.splice(index, 1);
      }
    },
    incrementProduct: (state, action) => {
      const productId = action.payload;
      const product = state.cartProduct.find((ele) => ele.id === productId);
      const index = state.cartProduct.findIndex((ele) => ele.id === productId);
      product.stock = product.stock - 1;
      product.quantity = product.quantity + 1;
      state.cartProduct.splice(index, 1, product);
    },
    decrementProduct: (state, action) => {
      const productId = action.payload;
      const product = state.cartProduct.find((ele) => ele.id === productId);
      const index = state.cartProduct.findIndex((ele) => ele.id === productId);
      product.stock = product.stock + 1;
      product.quantity = product.quantity - 1;
      state.cartProduct.splice(index, 1, product);
    }
  }
});

export const { addProduct, deleteProduct, incrementProduct, decrementProduct } =
  productSlice.actions;

export default productSlice.reducer;
