import "./App.css";
import React, { Fragment } from "react";
import Home from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { fetchPostData } from "../src/store/post-actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Universities from "./components/Pages/Universities/Universities";
import PostalLookUp from "./components/Pages/PostalLookUp/PostalLookUp";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const addPostState = useSelector((state) => state.addPosts.addPostState);
  const editPostState = useSelector((state) => state.addPosts.editPostState);

  console.log("I am in the start of application");

  useEffect(() => {
    dispatch(fetchPostData(null));
  }, [dispatch]);

  useEffect(() => {}, [addPostState, editPostState]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  });

  return (
    <Fragment>
      <div className="App">
        <Routes>
          <Route path="/Universities" element={<Universities />} />
          <Route path="/PostalLookUp" element={<PostalLookUp/>} />


          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
