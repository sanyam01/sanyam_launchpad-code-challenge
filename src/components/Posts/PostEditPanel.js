import React, { Fragment } from "react";
import CustomButton from "../UI/CustomButton";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const PostEditPanel = (props) => {

  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={2}>
        <Button color="primary" variant="outlined" size="medium" onClick ={props.onEditHandler}>
          {" "}
          Edit{" "}
        </Button>
      </Grid>

      <Grid item xs={2}>
        <Button color="primary" variant="outlined" size="medium" onClick ={props.onDeleteHandler}>
          {" "}
          Delete{" "}
        </Button>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};

export default PostEditPanel;
