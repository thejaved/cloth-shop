import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WishlistItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  ratingCount: number;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const itemExists = state.items.find(
        item => item._id === action.payload._id,
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearWishlist: state => {
      state.items = [];
    },
  },
});

export const {addToWishlist, removeFromWishlist, clearWishlist} =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
