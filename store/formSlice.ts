// store/formSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
    name: string;
    email: string;
    social: string;
    project: string;
    budget: string;
    errors: { [key: string]: string };
    [key: string]: string | { [key: string]: string }; // Add this line
}

const initialState: FormState = {
    name: '',
    email: '',
    social: '',
    project: '',
    budget: '',
    errors: {},
};

type FormField = keyof Omit<FormState, 'errors'>;

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateField: (state, action: PayloadAction<{ field: FormField; value: string }>) => {
            const { field, value } = action.payload;
            state[field] = value;
            if (state.errors[field]) {
                state.errors[field] = '';
            }
        },
        setError: (state, action: PayloadAction<{ field: FormField; message: string }>) => {
            const { field, message } = action.payload;
            state.errors[field] = message;
        },
        clearForm: () => initialState,
    },
});

export const { updateField, setError, clearForm } = formSlice.actions;

export default formSlice.reducer;
