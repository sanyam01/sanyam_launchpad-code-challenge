import React, { Fragment } from "react";
import NavigationBar from "./NavigationBar";
import PostsLayout from "./PostsLayout";

const Home = () => {
  
  return (
    <Fragment>
      <h1 > Welcome to the home page</h1>
      <NavigationBar/>
      <PostsLayout/>
    </Fragment>
  );
};

export default Home;
