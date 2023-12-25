import {createSlice, current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)  => {
            // Vanilla (Older) Version Redux => DON'T MUTATE THE STATE
            // console.log(state);
            // console.log(current(state));
            // console.log(action);
            // const newState = ...state;
            // newState.items.push(action.payload);
            // return newState;

            // REDUX Toolkit
            // mutate the state
            state.items.push(action.payload)
            // console.log(current(state));
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearItem: (state, action) => {
            // console.log(state);
            // console.log(current(state));
            // state = [];
            // console.log(state);
            // RTK - either Mutate the existing state or return a new state
            //return {items: state};
            state.items.length = 0; // state = [];
        }
    }
})


export const {addItem, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;
