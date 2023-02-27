import { configureStore } from '@reduxjs/toolkit';
import searchListReducer from '../features/searchList/searchListReducer';

export default configureStore({
  reducer: {
    searchList: searchListReducer,
  },
});
