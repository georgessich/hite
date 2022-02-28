import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import favSlice from "./favs-slice";
import recentSlice from "./recent-slice";
const store = configureStore({
    reducer: {cart: cartSlice.reducer, favs: favSlice.reducer, recent: recentSlice.reducer}
});

export default store;