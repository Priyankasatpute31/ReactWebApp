import {configureStore} from '@reduxjs/toolkit';
import tabReducer, {notesReducer} from '../reducer/reducer';

export const store = configureStore({
  reducer: {
    tabReducer,
    notesReducer
  }
})

export default store;