import React from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-slice";
import classes from "./Post.module.css";
import PostEditPanel from "./PostEditPanel";

const Post = (props) => {
  const dispatch = useDispatch();

  const { id, title, body, userId } = props.post;

  const removePostHandler = () => {};

  const addPostHandler = () => {};

  const editPostHandler = () => {};

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
      <PostEditPanel />
    </li>
  );
};

export default Post;
