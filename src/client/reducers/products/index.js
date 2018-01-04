import findIndex from 'lodash/findIndex';
import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_REMOVE_PRODUCT,
  RECEIVE_REMOVE_PRODUCT,
  ERROR_REMOVE_PRODUCT
} from '../../actions/types';

const INITIAL_STATE = {
  data: [],
  page: {},
  isFetching: true,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_PRODUCTS: {
      return { ...state, isFetching: true, lastUpdate: Date.now() };
    }
    case RECEIVE_PRODUCTS: {
      const { payload: { data, page} } = action;
      return { ...state, isFetching: false, lastUpdate: Date.now(), data, page };
    }
    case REQUEST_REMOVE_PRODUCT: {
      const nextData = state.data.slice();
      const index = findIndex(nextData, item => item.id === action.payload);
      if(index >= 0) {
        nextData[index].isFetching = true;
      }

      return { ...state, data: nextData };
    }
    case RECEIVE_REMOVE_PRODUCT: {
      const nextData = state.data.slice();
      const index = findIndex(nextData, item => item.id === action.payload);
      if(index >= 0) {
        nextData.splice(index, 1);
      }

      return { ...state, data: nextData };
    }
    case ERROR_REMOVE_PRODUCT: {
      const nextData = state.data.slice();
      const index = findIndex(nextData, item => item.id === action.payload);
      if(index >= 0) {
        nextData[index].isFetching = false;
      }

      return { ...state, data: nextData };
    }
    default: return state;
  }
};