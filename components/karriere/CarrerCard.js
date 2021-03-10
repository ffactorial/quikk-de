import {
  Card,
  Description,
  Display,
  Grid,
  Text,
  useTheme,
} from "@geist-ui/react";
import React from "react";

const CarrerCard = ({ title, subtitle, content }) => {
  const theme = useTheme();

  return (
    <Grid xs={24} sm={12} md={8}>
      <Card style={{ height: "100%" }}>
        <Display
          caption={
            <Text
              style={{
                textAlign: "left",
                margin: 0,
                color: theme.palette.foreground,
              }}
              p
            >
              {content}
            </Text>
          }
        >
          <Description
            style={{ margin: 0, textAlign: "center" }}
            title={
              <Text
                b
                style={{
                  width: "100%",
                  color: theme.palette.foreground,
                }}
              >
                {title}
              </Text>
            }
            content={
              <Text
                style={{ fontWeight: "normal", textAlign: "left" }}
                type="secondary"
              >
                {subtitle}
              </Text>
            }
          />
        </Display>
      </Card>
    </Grid>
  );
};

export default CarrerCard;
