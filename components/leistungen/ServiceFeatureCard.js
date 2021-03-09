import { Card, Grid, Text } from "@geist-ui/react";
import { CheckCircle } from "@geist-ui/react-icons";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";

const ServiceFeatureCard = ({ title, features, subtitle }) => {
  return (
    <Grid xs={24}>
      <Card type="success">
        <Grid.Container gap={MEDIUM_GAP}>
          <Grid xs={24} direction="column">
            <Text h3 style={{ margin: 0, lineHeight: 0.8 }}>
              {title}
            </Text>
            <Text p>{subtitle ?? ""}</Text>
          </Grid>
          {features.map((_, j) => (
            <Grid xs={24} sm={12} key={j}>
              <Card type="lite" shadow>
                <Grid.Container gap={MEDIUM_GAP} alignItems="center">
                  <Grid xs={4} md={2} justify="center">
                    <CheckCircle />
                  </Grid>
                  <Grid xs={20} md={22} justify="center">
                    <Text style={{ width: "100%", textAlign: "left" }}>
                      {_}
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Card>
    </Grid>
  );
};

export default ServiceFeatureCard;
