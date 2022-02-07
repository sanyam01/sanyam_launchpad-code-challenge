import { createSlice } from "@reduxjs/toolkit";

const postalSlice = createSlice({
  name: "postal",

  initialState: {
    postalCode: null,
    postalDisplay: false,
    postalData: null,
  },

  reducers: {
    assignPostalData(state, action) {
      state.postalCode = action.payload.postalCode;
      state.postalDisplay = action.payload.postalDisplay;
      state.postalData = action.payload.postalData;
    },
  },
});

export const postalActions = postalSlice.actions;

export default postalSlice;
