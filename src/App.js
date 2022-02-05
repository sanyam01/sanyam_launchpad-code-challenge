import "./App.css";
import Home from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { fetchPostData } from "../src/store/post-actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  console.log("I am in the start of application");

  useEffect(() => {
    
    dispatch(fetchPostData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  });

  return (
    <div className="App">
      <Home />
      {/* <Routes>
          <Route path = "home">
            <Home/>
          </Route>

          <Route path = "/universities">
            <p> This is the university page</p>
          </Route>

          <Route path = "/postalCodes">
            <p> This is the postal code page</p>
          </Route>

        </Routes> */}
    </div>
  );
}

export default App;
