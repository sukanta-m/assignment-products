import { fetchProductList, createProduct, updateProduct, deleteProduct, fetchProduct } from "../apis/product";
import {
  FTECH_PRODUCTS_FAILURE, FTECH_PRODUCTS_SUCCESS, FTECH_PRODUCTS_REQUEST,
  CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE
 } from "../constants";
 
export const fetchProductsAction = (searchTxt = '') => {
  return dispatch => {
    dispatch({ type: FTECH_PRODUCTS_REQUEST })
    return fetchProductList(searchTxt)
    .then(response => dispatch({type: FTECH_PRODUCTS_SUCCESS, payload: response}))
    .catch(error => dispatch({type: FTECH_PRODUCTS_FAILURE, error}));
  }
}

export const createProductAction = (data) => {
  return dispatch => {
    dispatch({ type: CREATE_PRODUCT_REQUEST })
    return createProduct(data)
    .then(response => dispatch({type: CREATE_PRODUCT_SUCCESS, payload: response}))
    .catch(error => dispatch({type: CREATE_PRODUCT_FAILURE, error}));
  }
}

export const updateProductAction = (id, data) => {
  return dispatch => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST })
    return updateProduct(id, data)
    .then(response => dispatch({type: UPDATE_PRODUCT_SUCCESS, payload: response}))
    .catch(error => dispatch({type: UPDATE_PRODUCT_FAILURE, error}));
  }
}

export const deleteProductAction = (id) => {
  return dispatch => {
    dispatch({ type: DELETE_PRODUCT_REQUEST })
    return deleteProduct(id)
    .then(response => dispatch({type: DELETE_PRODUCT_SUCCESS, payload: response}))
    .catch(error => dispatch({type: DELETE_PRODUCT_FAILURE, error}));
  }
}

export const fetchProductAction = id =>  {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCT_REQUEST })
    return fetchProduct(id)
    .then(response => dispatch({type: FETCH_PRODUCT_SUCCESS, payload: response}))
    .catch(error => dispatch({type: FETCH_PRODUCT_FAILURE, error}));
  }
}