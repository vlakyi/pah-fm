import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  date: new Date().toISOString().split('T')[0],
  startLocation: '',
  mileageStart: 0,
  project: '',
  car: '',
  passenger: '',
  description: '',
  endLocation: '',
  mileageEnd: 0,
};

const PREFIX = 'new_drive';

const newDriveSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateNewDrive(state, { payload }) {
      return state = {...state, ...payload};
    },
    resetNewDrive(state) {
      return state = initialState;
    },
  },
});

export const { updateNewDrive, resetNewDrive } = newDriveSlice.actions;

export const newDriveReducer = newDriveSlice.reducer;
