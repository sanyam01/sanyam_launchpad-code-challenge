import { postActions } from "./post-slice";

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20"
      );
      if (!response.ok) {
        throw new Error("Could not reach the posts");
      }

      const data = await response.json();

      return data;
    };

    try {
      const postData = await fetchData();

      console.log(postData);
      console.log("The length of data is " + postData.length);

      dispatch( postActions.replaceCart({
          posts : postData,
          totalPosts : postData.length,
          changed : true,
      }));
     

      
    } catch (error) {
      console.log("Error has occured");
      console.log(error);
    }
  };
};
