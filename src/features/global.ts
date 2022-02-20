import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  activeTabKey: string;
  activeItemKey: string;
}

const initialState: GlobalState = {
  activeTabKey: '',
  activeItemKey: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setActiveTabKey: (state, action: PayloadAction<string>) => {
      state.activeTabKey = action.payload;
    },
    setActiveItemKey: (state, action: PayloadAction<string>) => {
      state.activeItemKey = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const globalAction = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
