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
      state.cartProduct = [...state.cartProduct, action.payload];
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      console.log(productId);
      const index = state.cartProduct.findIndex((ele) => ele.id === productId);
      if (index !== -1) {
        state.cartProduct.splice(index, 1);
      }
    }
  }
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
