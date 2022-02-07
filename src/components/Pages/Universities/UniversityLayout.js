import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./UniversityLayout.module.css";
import Card from "../Layout/Card";

const UniversityLayout = () => {
  const data = useSelector((state) => state.universities.countryData);
  console.log("I am inside the university layput");
  console.log(data);
  return (
    <Fragment>
      <h3>This is the university layout</h3>
      {data && (
        <div>
          {data.map((post) => (
            <Card>
              <p className={classes.post}> {JSON.stringify(post)}</p>
            </Card>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default UniversityLayout;
