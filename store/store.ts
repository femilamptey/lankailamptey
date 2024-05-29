import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import formReducer from './formSlice';

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        form: formReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;