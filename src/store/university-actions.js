import { universityActions } from "./university-slice";

export const fetchCountryData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://limitless-shore-76329.herokuapp.com/https://api.first.org/data/v1/countries"
      );

      const data = await response.json();

      return data;
    };

    try {
      const countryData = await fetchData();

      console.log(countryData.data);

      dispatch(
        universityActions.assignCountryData({
          countries: countryData.data,
        })
      );
    } catch (error) {
      console.log("Error has occured");
      console.log(error);
    }
  };
};

export const fetchUniversityData = (name) => {
  return async (dispatch) => {
    const fetchUniData = async (name) => {
      const url = "http://universities.hipolabs.com/search?country=" + name;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not reach the posts");
      }

      const data = await response.json();

      return data;
    };

    try {
      const universityData = await fetchUniData(name);

      const countryArrayData = Object.values(universityData);

      console.log("The current value is" + name);

      dispatch(
        universityActions.assignCountryName({
          countryName: name,
          countryData: countryArrayData,
        })
      );
    } catch (error) {
      console.log("Error has occured");
      console.log(error);
    }
  };
};
