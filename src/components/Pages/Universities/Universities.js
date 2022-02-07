import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryData } from "../../../store/university-actions";
import SelectComponent from "./SelectComponent";

const Universities = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryData());
    },[dispatch]);

  return (
    <Fragment>
      <h1> This is the Universities Page</h1>
      <SelectComponent/>
    </Fragment>
  );
};

export default Universities;
