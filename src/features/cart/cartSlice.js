import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    // cart: [
    //     {
    //         pizzaId: 12,
    //         name: "test",
    //         quantity: 2,
    //         unitPrice: 16,
    //         totalPrice: 32,
    //     },
    // ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = pizzaId
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            );
        },
        increaseItemQuantity(state, action) {
            // payload = pizzaId
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );

            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantityaddItem(state, action) {
            // payload = pizzaId
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );

            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state, action);
            }
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantityaddItem,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// Sin usar reselect
// export const getTCartQuantity = (state) => {
//     return state.cart.cart.reduce((sum, item) => {
//         return sum + item.quantity;
//     }, 0);
// };

// Usando reselect, lo que hace es que solo cambia cuando cambia el estado
export const getTCartQuantity = createSelector(
    [(state) => state.cart.cart],
    (state) => {
        return state.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);
    }
);

// Sin usar reselect
// export const getTCartPrice = (state) => {
//     return state.cart.cart.reduce((sum, item) => {
//         return sum + item.totalPrice;
//     }, 0);
// };
// Usando reselect
export const getTCartPrice = createSelector(
    [(state) => state.cart.cart],
    (state) => {
        return state.reduce((sum, item) => {
            return sum + item.totalPrice;
        }, 0);
    }
);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) =>
    createSelector([(state) => state.cart.cart], (state) => {
        return state.find((item) => item.pizzaId === id)?.quantity ?? 0;
    });
