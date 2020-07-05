import {
  FTECH_PRODUCTS_REQUEST, FTECH_PRODUCTS_SUCCESS, FTECH_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE
} from "../constants";

const initialState = {
  fetching: false,
  lists: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FTECH_PRODUCTS_REQUEST:
      return {
        ...state,
        fetching: true,
        updatingStatus: false
      }

    case FTECH_PRODUCTS_SUCCESS:
      return {
        ...state,
        lists: payload.data,
        fetching: false
      }

    case FTECH_PRODUCTS_FAILURE:
      let orderData = [];
      return {
        ...state,
        fetching: false,
        order: orderData
      }

    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        fetching: true
      }

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        lists: [payload.data],
        fetching: false
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
        fetching: false
      };
    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        upserting: true
      }
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        lists: [payload.data, ...state.lists],
        upserting: false
      }
    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
        upserting: false
      }
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        upserting: true
      }
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        lists: [payload.data, ...state.lists],
        upserting: false
      }
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload,
        upserting: false
      }
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        deleting: true
      }
    case DELETE_PRODUCT_SUCCESS:
      console.log(payload)
      return {
        ...state
      }
    case DELETE_PRODUCT_FAILURE:
      console.log(payload)
      return {
        ...state
      }
    default:
      return state
  }
}

