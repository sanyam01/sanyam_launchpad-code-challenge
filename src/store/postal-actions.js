import { postalActions } from "./postal-slice";

export const fetchPostalData = (code) => {
  return async (dispatch) => {
    const fetchPostalData = async (code) => {
      const url = "https://api.zippopotam.us/us/" + code;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not reach the posts");
      }

      const data = await response.json();

      return data;
    };

    try {
      const postalData = await fetchPostalData(code);

      dispatch(
        postalActions.assignPostalData({
          postalCode: code,
          postalDisplay: true,
          postalData: postalData,
        })
      );
    } catch (error) {
      console.log("Error has occured");
      console.log(error);
    }
  };
};
