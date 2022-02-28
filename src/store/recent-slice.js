import { createSlice } from "@reduxjs/toolkit";

const recentSlice = createSlice({
  name: "recent",
  initialState: {
    items: [],
  },
  reducers: {
    recentlyViewedPages(state, action) {
      const viewedPage = action.payload;
      const listedPage = state.items.find((item) => item.id === viewedPage.id);
      if (state.items.length === 3) {
        state.items.shift();
      }
      if (!listedPage) {
        state.items.push({
          id: viewedPage.id,
          price: viewedPage.price,
          name: viewedPage.title,
          image: viewedPage.image,
        });
      }
    },
  },
});
export const recentActions = recentSlice.actions;
export default recentSlice;