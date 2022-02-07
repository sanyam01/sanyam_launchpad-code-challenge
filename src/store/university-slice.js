import { createSlice } from "@reduxjs/toolkit";

const universitySlice = createSlice({
  name: "universities",

  initialState: {
    universities: [],
    totalUniversities: 0,
    changedUniversities: false,
    countries: [],
    totalCountries: 0,
    changedCountries: false,
    countrySearchName: null,
    countryData: [],
  },

  reducers: {
    assignUniversitiesData(state, action) {},

    assignCountryName(state, action) {
      state.countrySearchName = action.payload.countryName;
      state.countryData = action.payload.countryData;
    },

    assignCountryData(state, action) {
      const countriesObject = action.payload.countries;

      Object.keys(countriesObject).forEach((key) => {
        const value = countriesObject[key];

        const countryName = value["country"];
        state.countries.push(countryName);
      });
    },
  },
});

export const universityActions = universitySlice.actions;

export default universitySlice;
