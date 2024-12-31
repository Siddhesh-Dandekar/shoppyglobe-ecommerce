import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice.js"


const appStore = configureStore({
    reducer:
    {
        cart: cartReducer,
    }
});

export default appStore;