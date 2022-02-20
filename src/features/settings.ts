import { Overwrite } from 'utility-types';
import { createSlice } from '@reduxjs/toolkit';

export const GlobalSettingsKeys = {
  tableId: 'tableId',
  viewId: 'viewId',
  descriptionId: 'descriptionId',
  flowFieldId: 'flowFieldId',
  imageFieldId: 'imageFieldId',
  urlFieldId: 'urlFieldId',
};

export type GlobalSettingsState = Overwrite<
  Record<keyof typeof GlobalSettingsKeys, string>,
  {
    urlFieldId?: string;
  }
>;

const initialState: GlobalSettingsState = {
  tableId: '',
  viewId: '',
  imageFieldId: '',
  descriptionId: '',
  flowFieldId: '',
  urlFieldId: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const settingsAction = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
