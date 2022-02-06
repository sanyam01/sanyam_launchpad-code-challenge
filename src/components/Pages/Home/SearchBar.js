import { Grid, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { fetchPostData } from "../../../store/post-actions";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const SearchBar = (props) => {

    const dispatch = useDispatch();

    const searchIdRef = useRef("");

    const searchHandler = (id) => {
        dispatch(
            fetchPostData(searchIdRef.current.value)
        );


    };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      <Grid item xs={12} />

      <Grid item xs={3} />
      <Grid item xs={2}>
        <Typography variant="h4" >Search by Id</Typography>
      </Grid>

      <Grid item xs={2}>
        <TextField inputRef={searchIdRef}/>
      </Grid>

      <Grid item xs = {2}>
          <Button variant="contained" size="large" color = "primary" onClick = {searchHandler}> Search</Button>

      </Grid>
    </Grid>
  );
};

export default SearchBar;
