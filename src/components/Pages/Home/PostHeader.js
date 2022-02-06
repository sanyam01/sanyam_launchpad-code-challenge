import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const PostHeader = (props) => {
  

  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography variant="h4"> Posts </Typography>
      </Grid>

      <Grid item xs={4} />
      <Grid item xs={4}>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          onClick={props.onAddPost}
        >
          {" "}
          Add Post{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostHeader;
