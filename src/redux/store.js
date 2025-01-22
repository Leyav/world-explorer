// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Import your combined reducers

export const store = configureStore({
    reducer: rootReducer,
});
