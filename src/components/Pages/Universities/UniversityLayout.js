import { Fragment } from "react";
import { useSelector } from "react-redux";

const UniversityLayout = () => {
  const data = useSelector((state) => state.universities.countryData);
  console.log("I am inside the university layput");
  console.log(data);
  return (
    <Fragment>
      <h3>This is the university layout</h3>
      {data && <ul>
        {data.map((post) => (
          <p> {JSON.stringify(post)}</p>
        ))}
      </ul>}
    </Fragment>
  );
};

export default UniversityLayout;
