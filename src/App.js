import './App.css';
import Home from "./components/Pages/Home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className = "App">
        <Home/>
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
