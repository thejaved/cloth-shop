import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const {productId, quantity, name, price, imageUrl} = action.payload;
      const existingItem = state.items.find(
        item => item.productId === productId,
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({productId, quantity, name, price, imageUrl});
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(
        item => item.productId !== productIdToRemove,
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
