import { Grid, Loading } from "@geist-ui/react";
import React from "react";

const LoadingScreen = () => {
  return (
    <Grid.Container
      alignItems="center"
      justify="center"
      style={{ height: "50vh" }}
    >
      <Grid xs={24} alignItems="center" justify="center">
        <Loading />
      </Grid>
    </Grid.Container>
  );
};

export default LoadingScreen;
