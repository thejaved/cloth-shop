import {AppThunk} from '../store';
import {
  fetchProductsSuccess,
  fetchProductSuccess,
} from '../reducers/productReducer';
import {getProducts, getProductById} from '../../services/product';

export const fetchProducts = (): AppThunk<void> => async dispatch => {
  try {
    const products = await getProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    console.error(error);
  }
};

export const fetchProduct =
  (id: string): AppThunk<void> =>
  async dispatch => {
    try {
      const product = await getProductById(id);
      dispatch(fetchProductSuccess(product));
    } catch (error) {
      console.error(error);
    }
  };
