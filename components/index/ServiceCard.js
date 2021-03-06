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
import InternalLink from "../misc/InternalLink";

const ServiceCard = ({ title, content, icon }) => {
  const theme = useTheme();
  return (
    <Grid xs={24} sm={12} md={8}>
      <InternalLink href="/leistungen" style={{ width: "100%" }}>
        <Card hoverable>
          <Display
            caption={
              <Description
                title={
                  <Text
                    b
                    style={{
                      textAlign: "center",
                      width: "100%",
                      color: theme.palette.foreground,
                    }}
                  >
                    {title}
                  </Text>
                }
                content={
                  <>
                    <Divider
                      style={{ backgroundColor: theme.palette.success }}
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
