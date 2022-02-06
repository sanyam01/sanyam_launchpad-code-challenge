import classes from "./PostLayout.module.css";
import Card from "../Layout/Card";
import AllPosts from "../../Posts/AllPosts";

import PostHeader from "./PostHeader";

import { useSelector, useDispatch } from "react-redux";

import AddPostLayout from "../Layout/AddPostLayout";

import { addPostActions } from "../../../store/addPost-slice";

const PostsLayout = () => {
  const posts = useSelector((state) => state.posts.posts);
  const addPosts = useSelector((state) => state.addPosts.addPostState);
  const editPosts = useSelector((state) => state.addPosts.editPostState);
  const editId =  useSelector((state) => state.addPosts.editPostId);
  const editTitle =  useSelector((state) => state.addPosts.editPostTitle);
  const editBody =  useSelector((state) => state.addPosts.editPostBody);


  const dispatch = useDispatch();

  const AddPostHandler = () => {
    dispatch(addPostActions.changePostState({ postState: true }));
  };

  const closeLayoutHandler = () => {
    dispatch(addPostActions.changePostState({ postState: false }));
  };

  const closeEditHandler = () => {
    console.log("I am inside closeEditHandler");
    dispatch(
      addPostActions.changeEditState({
          
        editState: false,
        idState: null,
        titleState: null,
        bodyState: null,
      })
    );
  };
  console.log("Value of prop edit state is" + editPosts);
  return (

   
    <div>
      {addPosts && (
        <AddPostLayout
          onClose={closeLayoutHandler}
          name="Add Post"
          body=""
          title=""
          id=""
        />
      )}
      {editPosts && (
        <AddPostLayout
          onClose={closeEditHandler}
          name="Edit Post"
          body= {editBody}
          title={editTitle}
          id={editId}
        />
      )}

      <Card className={classes.post}>
        <PostHeader onAddPost={AddPostHandler} />
        <AllPosts />
      </Card>
    </div>
  );
};

export default PostsLayout;
