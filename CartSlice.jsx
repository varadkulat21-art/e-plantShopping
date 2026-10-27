import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

function getItemName(value) {
  if (typeof value === "string") return value;
  return value?.name ?? value?.plant?.name ?? value?.item?.name ?? value?.id;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      if (!plant || !plant.name) return;
      const existingItem = state.cartItems.find((item) => item.name === plant.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = getItemName(action.payload);
      state.cartItems = state.cartItems.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const payload = action.payload ?? {};
      const name = getItemName(payload);
      const quantity = Number(payload.quantity);
      const item = state.cartItems.find((entry) => entry.name === name);
      if (!item || !Number.isFinite(quantity)) return;
      if (quantity <= 0) {
        state.cartItems = state.cartItems.filter((entry) => entry.name !== name);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
