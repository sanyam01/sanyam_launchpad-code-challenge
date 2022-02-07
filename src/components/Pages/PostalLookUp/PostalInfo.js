import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../Layout/Card";
import classes from "./PostalInfo.module.css";

const PostalInfo = () => {
  const postalData = useSelector((state) => state.postal.postalData);

  return (
    <Fragment>
      <h3> Area information</h3>

      <Card>
        <p className={classes.post}> {JSON.stringify(postalData)}</p>
      </Card>
    </Fragment>
  );
};

export default PostalInfo;
