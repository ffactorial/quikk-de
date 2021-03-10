import { Grid, Text } from "@geist-ui/react";
import React from "react";
import Title from "./Title";

const TitleWithDesc = ({ title = "", desc = "" }) => {
  return (
    <Grid xs={24} direction="column">
      <Title title={title} centered={false} />
      <Text type="secondary" style={{ marginBottom: 0 }}>
        {desc}
      </Text>
    </Grid>
  );
};

export default TitleWithDesc;
