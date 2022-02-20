import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  activeTabKey: string;
  activeItemKey: string;
  filled: boolean;
}

const initialState: GlobalState = {
  activeTabKey: '',
  activeItemKey: '',
  filled: false,
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
    filledForm: (state) => {
      state.filled = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const globalAction = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
