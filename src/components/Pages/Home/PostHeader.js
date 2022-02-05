import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const PostHeader = () => {
  const addPostHandler = () => {
    console.log("This has been clicked");
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={4}>
        <Typography variant="h4"> Posts </Typography>
      </Grid>

      <Grid item xs={4} />
      <Grid item xs={4}>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          onClick={addPostHandler}
        >
          {" "}
          Add Post{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostHeader;
