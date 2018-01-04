import axios from 'axios';

import {
  ROOT_URL,
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS,
  REQUEST_REMOVE_PRODUCT,
  RECEIVE_REMOVE_PRODUCT,
  ERROR_REMOVE_PRODUCT
} from './types';

export const fetchProducts = ({ page, size }) => dispatch => {
  dispatch({ type: REQUEST_PRODUCTS });
  return axios.get(`${ROOT_URL}/products?page=${page || 0}&size=${size || 25}`)
    .then(res => dispatch({ type: RECEIVE_PRODUCTS, payload: res.data }))
    .catch(err => console.log(err));
};

export const deleteProduct = id => dispatch => {
  dispatch({ type: REQUEST_REMOVE_PRODUCT, payload: id });
  return axios.delete(`${ROOT_URL}/products/${id}`)
    .then(res => dispatch({ type: RECEIVE_REMOVE_PRODUCT, payload: id }))
    .catch(err => dispatch({ type: ERROR_REMOVE_PRODUCT, payload: id }));
};

export const createProduct = data => dispatch => axios.post(`${ROOT_URL}/products`, data);