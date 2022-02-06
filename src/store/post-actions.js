import { integerPropType } from "@mui/utils";
import { postActions } from "./post-slice";
import { addPostActions } from "./addPost-slice";

export const fetchPostData = (id) => {
  let response = null;
  return async (dispatch) => {
    const fetchData = async (id) => {
      if (!id) {
        response = await fetch(
          "https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20"
        );
      } else {
        const url = "https://jsonplaceholder.typicode.com/posts/" + id;
        response = await fetch(url);
        console.log("The post returned is " + response);
      }
      if (!response.ok) {
        throw new Error("Could not reach the posts");
      }

      const data = await response.json();

      return data;
    };

    try {
      const postData = await fetchData(id);

      console.log(postData);
      console.log("The length of data is " + postData.length);
      console.log("The type of response is " + typeof postData);
      let arrayPostData = [];
      if (!postData.length) {
        arrayPostData.push(postData);
      } else {
        arrayPostData = postData;
      }

      dispatch(
        postActions.replaceCart({
          posts: arrayPostData,
          totalPosts: arrayPostData.length,
          changed: true,
        })
      );
    } catch (error) {
      console.log("Error has occured");
      console.log(error);
    }
  };
};

export const sendPostData = (postData) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: postData,
        }
      );
      if (!response.ok) {
        throw new Error("Could not reach the posts");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await sendData();

      console.log(data);

      dispatch(
        addPostActions.changePostState({
          postState: false,
        })
      );
    } catch (error) {
      console.log("Error has occured");
      console.log(error);
    }
  };
};

export const editPostData = (postData) => {
    return async (dispatch) => {
      const editData = async () => {

        const url = "https://jsonplaceholder.typicode.com/posts/" + postData.id;
        const response = await fetch(
         url,
          {
            method: "PUT",
            body: postData,
          }
        );
        if (!response.ok) {
          throw new Error("Could not reach the posts");
        }
  
        const data = await response.json();
  
        return data;
      };
  
      try {
        const data = await editData();
  
        console.log(data);
  
        dispatch(
            addPostActions.changeEditState({
                postState: false,
                idState: null,
                titleState: null,
                bodyState :null,
                userIdState: null,
              })
        );
      } catch (error) {
        console.log("Error has occured");
        console.log(error);
      }
    };
  };
  
export const deletePost = (id) => {
    return async (dispatch) => {
      const deleteData = async (id) => {

        const url = "https://jsonplaceholder.typicode.com/posts/" + id;
        const response = await fetch(
          url,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Could not reach the posts");
        }
  
        const data = await response.json();
  
        return data;
      };
  
      try {
        const data = await deleteData(id);
  
        console.log("Response after deleted data is" + data);
  
      } catch (error) {
        console.log("Error has occured");
        console.log(error);
      }
    };
  };
