import { universityActions } from "./university-slice";

export const fetchCountryData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://limitless-shore-76329.herokuapp.com/https://api.first.org/data/v1/countries"
      );
      console.log("The country data returned is " + response);

      //   if (!response.ok) {
      //     throw new Error("Could not reach the posts");
      //   }

      const data = await response.json();

      //const data = await response;

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
  console.log("The name here is " + name);
  return async (dispatch) => {
    const fetchUniData = async (name) => {
      const url = "http://universities.hipolabs.com/search?country=" + name;
      console.log(url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not reach the posts");
      }

      const data = await response.json();

      //   const data = await response;

      return data;
    };

    try {
      const universityData = await fetchUniData(name);

      console.log("The uni data is " + universityData);
      console.log("Print keys");
      console.log(Object.values(universityData));
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
