import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        name: '',
        number: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName(state, action) {
        state.name = action.payload;
        },
        setNumber (state, action) {
            state.number = action.payload
        },
        resetForm(state, action) {
            state.name = '';
            state.number = '';
          },
    }
})

export const {setName, setNumber, resetForm} = formSlice.actions;
export default formSlice.reducer;