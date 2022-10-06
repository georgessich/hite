import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import favSlice from "./favs-slice";
import recentSlice from "./recent-slice";
import { itemsAPI } from "./fetch-slice";
const store = configureStore({
    reducer: {cart: cartSlice.reducer, favs: favSlice.reducer, recent: recentSlice.reducer, [itemsAPI.reducerPath]: itemsAPI.reducer},
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(itemsAPI.middleware)
});

export default store;