import React from "react";
import { deletePost } from "../../store/post-actions";
import classes from "./Post.module.css";
import PostEditPanel from "./PostEditPanel";
import { useDispatch } from "react-redux";
import { addPostActions } from "../../store/addPost-slice";

const Post = (props) => {
 

  const { id, title, body, userId } = props.post;

  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost(id));

  };

  const editPostHandler = () => {
      
    dispatch(
      addPostActions.changeEditState({
        postState: true,
        idState: id,
        titleState: title,
        bodyState :body,
        userIdState: userId,
      })
    );
  };

  return (
    <li className={classes.post}>
      <header>
        <h3> {title} </h3>

        <div className={classes.id}>
          <span className={classes.id}>{id}</span>
        </div>
      </header>

      <div className={classes.body}>
        <div className={classes.quantity}>
          <span>{body}</span>
        </div>
      </div>
      <PostEditPanel onDeleteHandler = {deletePostHandler} onEditHandler = {editPostHandler}/>
    </li>
  );
};

export default Post;
