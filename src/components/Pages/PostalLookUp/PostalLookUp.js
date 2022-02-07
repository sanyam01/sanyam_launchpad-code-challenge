import { Fragment , useRef} from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { fetchPostalData } from "../../../store/postal-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PostalInfo from "./PostalInfo";

const PostalLookUp = (props) => {
  const dispatch = useDispatch();
  const postalRef = useRef("");

  const displayState = useSelector((state) => state.postal.postalCode);

  const postalHandler = (props) => {
      console.log(JSON.stringify(postalRef.current.value));
    dispatch(
      fetchPostalData(
        postalRef.current.value
      )
    );
  };

  return (
    <Fragment>
      <h1> This is the postal lookup page</h1>

      <Grid container spacing={2}>
        <Grid item xs={12} />
        <Grid item xs={4}>
          <Typography variant="h5"> Search by Postal Code </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField inputRef={postalRef} />{" "}
        </Grid>

        <Grid item xs={4}>
          <Button variant="contained" onClick={postalHandler}>
            Search
          </Button>
        </Grid>
      </Grid>
      {displayState && <PostalInfo />}
    </Fragment>
  );
};

export default PostalLookUp;
