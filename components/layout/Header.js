import { Button, Grid, Spacer, Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";
import InternalLink from "../misc/InternalLink";
import Container from "./Container";
import { Menu } from "@geist-ui/react-icons";

const Header = () => {
  const router = useRouter();

  const pathnames = {
    Home: "/",
    Leistungen: "/leistungen",
    Projekte: "/projekte",
    Blog: "/blog",
    "Über uns": "/wir",
    Kontakt: "/kontakt",
  };

  return (
    <header>
      <Spacer y={MEDIUM_GAP} />
      <Container>
        <Grid.Container
          gap={MEDIUM_GAP}
          justify="space-between"
          alignItems="center"
        >
          <Grid>
            <Text b>
              <InternalLink href="/">QUIKK</InternalLink>
            </Text>
          </Grid>
          <Grid>
            <Grid xs={0} sm={0} md>
              <Tabs
                initialValue={router.pathname}
                value={router.pathname}
                onChange={(pathname) => router.push(pathname)}
                hideDivider
              >
                {Object.entries(pathnames).map(([key, value]) => (
                  <Tabs.Item key={key} label={key} value={value} />
                ))}
              </Tabs>
            </Grid>
            <Grid xs sm md={0}>
              <Button
                auto
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Menu />
              </Button>
            </Grid>
          </Grid>
        </Grid.Container>
        <Spacer y={MEDIUM_GAP} />
      </Container>
    </header>
  );
};

export default Header;
