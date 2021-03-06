import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favs",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToFavs(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.title,
          image: newItem.image,
        });
      }
      localStorage.setItem("favs", JSON.stringify({ items: state.items }));
    },
    removeItemFromFavs(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem("favs", JSON.stringify({ items: state.items }));
      }
      
    },
  },
});

export const favsActions = favSlice.actions;
export default favSlice;
