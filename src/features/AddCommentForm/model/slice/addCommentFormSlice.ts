import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText(state, actions: PayloadAction<string>) {
            state.text = actions.payload;
        },
    },
    // extraReducers(builder) {
    //     builder.addCase(loginByUsername.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     });
    //     builder.addCase(loginByUsername.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //     });
    //     builder.addCase(loginByUsername.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     });
    // },
});

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer,
} = addCommentFormSlice;
