import { createSlice } from '@reduxjs/toolkit';
import { getChildrenList } from '../../api/requests';

const childrenSlice = createSlice({
  name: 'children',

  initialState: {
    children: null
  },

  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET CHILDREN
    getChildrenSuccess(state, action) {
      state.isLoading = false;
      state.children = action.payload;
    }
  }
});

// Reducer
export default childrenSlice.reducer;

// ----------------------------------------------------------------------

export function getChildren() {
  return async dispatch => {
    dispatch(childrenSlice.actions.startLoading());
    try {
      const response = await getChildrenList();
      dispatch(childrenSlice.actions.getChildrenSuccess(response));
    } catch (error) {
      dispatch(childrenSlice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
