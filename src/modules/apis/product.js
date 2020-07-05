import axios from "./axios";

export const fetchProductList = (q = '') => {
  return axios.get(`/products?q=${q}`)
};

export const createProduct = data => {
  return axios.post("/products", data)
}

export const updateProduct = (id, data) => {
  return axios.put(`/products/${id}`, data)
}

export const deleteProduct = id => {
  return axios.delete(`/products/${id}`);
}

export const fetchProduct = id => {
  return axios.get(`/products/${id}`);
}