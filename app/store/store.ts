import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import wishlistReducer from './reducers/wishlistReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'wishlist'],
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);

export default store;
