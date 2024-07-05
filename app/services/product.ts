import api from '../utils/api';

export const getProducts = async () => {
  const response = await api.get('/product');
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get(`/product/${id}`);
  return response.data;
};
