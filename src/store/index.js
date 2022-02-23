import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import favSlice from "./favs-slice";
const store = configureStore({
    reducer: {cart: cartSlice.reducer, favs: favSlice.reducer}
});

export default store;