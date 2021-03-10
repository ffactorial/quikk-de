import {
  Card,
  Description,
  Display,
  Divider,
  Grid,
  Text,
  useTheme,
} from "@geist-ui/react";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";
import InternalLink from "../misc/InternalLink";

const ServiceCard = ({ title, content, icon }) => {
  const theme = useTheme();
  return (
    <Grid xs={24} sm={12} md={8}>
      <InternalLink
        href="/leistungen"
        style={{ width: "100%", height: "100%" }}
      >
        <Card
          hoverable
          shadow
          style={{ borderColor: theme.palette.accents_2, height: "100%" }}
        >
          <Display
            caption={
              <Description
                title={
                  <Text
                    h3
                    style={{
                      textAlign: "center",
                      width: "100%",
                      color: theme.palette.foreground,
                      fontWeight: 700,
                    }}
                  >
                    {title}
                  </Text>
                }
                content={
                  <>
                    <Divider
                      style={{ backgroundColor: theme.palette.success }}
                      volume={2}
                    />
                    <Text style={{ fontWeight: "normal" }} type="secondary">
                      {content}
                    </Text>
                  </>
                }
                style={{ textAlign: "center" }}
              />
            }
          >
            {React.cloneElement(icon, {
              size: 42,
            })}
          </Display>
        </Card>
      </InternalLink>
    </Grid>
  );
};

export default ServiceCard;