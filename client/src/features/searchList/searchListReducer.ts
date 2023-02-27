import { createSlice } from '@reduxjs/toolkit';

const searchListSlice = createSlice({
  name: 'searchList',
  initialState: {
    value: [],
  },
  reducers: {
    updateList: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { updateList } = searchListSlice.actions;
export const selectSearchList = (state) => state.searchList.value;



export default searchListSlice.reducer;
