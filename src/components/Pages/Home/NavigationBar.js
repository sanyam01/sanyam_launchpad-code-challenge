import React, { Fragment } from "react";
import CustomButton from "../../UI/CustomButton";
import { Grid } from "@mui/material";

const NavigationBar = () => {
  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={2}>
        <CustomButton name="Universities" />
      </Grid>

      <Grid item xs={2}>
        <CustomButton name="Postal lookup" />
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
};

export default NavigationBar;
