import classes from "./PostLayout.module.css";
import React from "react";
import Card from "../Layout/Card";
import AllPosts from "../../Posts/AllPosts";

import PostHeader from "./PostHeader";

import { useSelector } from "react-redux";

const PostsLayout = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Card className={classes.post}>
      <PostHeader />
      <AllPosts />
    </Card>
  );
};

export default PostsLayout;
