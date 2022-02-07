import { postalActions } from "./postal-slice";

export const fetchPostalData = (code) => {
    console.log("The name here is " + code);
    return async (dispatch) => {
      const fetchPostalData = async (code) => {
        const url = "https://api.zippopotam.us/us/" + code;
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
        const postalData = await fetchPostalData(code);
  
        // console.log("The postal data is " + postalData);
        // console.log("Print keys");
        // console.log(Object.values(postalData));
        // const postalArrayData = Object.values(universityData);
  
        console.log("The current value is" + code);
  
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