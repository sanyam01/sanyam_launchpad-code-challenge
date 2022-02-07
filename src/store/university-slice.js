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
    countryData:[],
  },

  reducers: {
    assignUniversitiesData(state, action) {
      console.log("I am inside the assignUniversitiesData of university slice");
    },

    assignCountryName(state,action){
        state.countrySearchName = action.payload.countryName;
        state.countryData = action.payload.countryData;

    },

    assignCountryData(state, action) {
      console.log("I am inside the assignCountryData");
      console.log(action.payload.countries);
      const countriesObject = action.payload.countries;

      Object.keys(countriesObject).forEach((key) => {
        console.log(countriesObject[key]); // 'Bob', 47
        const value = countriesObject[key];
        console.log(value["country"]);
        const countryName = value["country"];
        state.countries.push(countryName);
      });
      

      console.log("Lets print all the countries");
      console.log("Printing this" + state.countries);
      // countriesObject.map((country) => {
      //     state.countries.push(country.country);
    },
  },
});

export const universityActions = universitySlice.actions;

export default universitySlice;
