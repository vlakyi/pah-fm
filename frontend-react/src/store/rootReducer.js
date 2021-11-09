import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { uiReducer } from './slices/ui';
import { newDriveReducer } from './slices/newDrive';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  newDrive: newDriveReducer
});

export default rootReducer;
