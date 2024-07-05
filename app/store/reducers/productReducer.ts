import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProductState {
  products: any[];
  product: any | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsSuccess(state, action: PayloadAction<any[]>) {
      state.products = action.payload;
    },
    fetchProductSuccess(state, action: PayloadAction<any>) {
      state.product = action.payload;
    },
  },
});

export const {fetchProductsSuccess, fetchProductSuccess} = productSlice.actions;
export default productSlice.reducer;
