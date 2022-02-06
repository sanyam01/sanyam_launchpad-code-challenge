import React, { Fragment, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import PostsLayout from "./PostsLayout";
import SearchBar from "./SearchBar";

const Home = () => {

  return (
    <Fragment>
      <h1 > Welcome to the home page</h1>
      <NavigationBar/>
      <SearchBar/>
      <PostsLayout/>
    </Fragment>
  );
};

export default Home;
