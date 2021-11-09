import { createSelector } from 'reselect';

const selectSelf = (state) => state;
export const getNewDrive = createSelector(selectSelf, state => state.newDrive);