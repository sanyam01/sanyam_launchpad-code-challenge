import React, { Fragment } from "react";
import CustomButton from "../UI/CustomButton";
import { Grid } from "@mui/material";

const PostEditPanel = () => {
  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={2}>
        <CustomButton name="Edit" color = "primary" variant = "outlined" size = "medium"/>
      </Grid>

      <Grid item xs={2}>
        <CustomButton name="Delete" color = "primary" variant = "outlined" size = "medium"/>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};

export default PostEditPanel;
