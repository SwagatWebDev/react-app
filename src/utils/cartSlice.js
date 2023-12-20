import {createSlice, current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
        initialState: {
            items: []
        },
    reducers: {
        addItem: (state, action) => {
            // Vanilla (Older) Redux => DON'T MUTATE THE STATE, RETURN WAS MANDATORY
            // const newState = (...state)
            // newState.items.push(action.payload);
            // return newState

            // Redux Toolkit
            // HAVE TO MUTATE THE STATE
            // Redux Toolkit usages Immer Library behind the scene
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // original state = ["Burger"]
        clearCart: (state, action) => {
            // console.log(state);
            //console.log(current(state));
            // state = [];
            // console.log(state);

            // RTK - either Mutate the existing state or return a new state
            // state.items.length = 0; // originalState = [];
            // return {items: []}; // this new [] will be replaced inside originalState = []
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
