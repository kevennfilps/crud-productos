import axios from 'axios';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
}

const BASE_URL = 'https://6869635a2af1d945cea1c907.mockapi.io/api/v1/products';

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(BASE_URL);
  return data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get<Product>(`${BASE_URL}/${id}`);
  return data;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const { data } = await axios.post<Product>(BASE_URL, product);
  return data;
};

export const updateProduct = async (id: string, product: Omit<Product, 'id'>): Promise<Product> => {
  const { data } = await axios.put<Product>(`${BASE_URL}/${id}`, product);
  return data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
