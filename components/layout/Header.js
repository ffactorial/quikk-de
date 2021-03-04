import { Grid, Spacer, Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MEDIUM_GAP, SMALL_GAP } from "../../src/constants";
import InternalLink from "../misc/InternalLink";
import Container from "./Container";

const Header = () => {
  const router = useRouter();

  const pathnames = {
    Home: "/",
    Leistungen: "/leistungen",
    Projekte: "/projekte",
    Blog: "/blog",
    Kontakt: "/kontakt",
  };

  return (
    <header>
      <Container>
        <Spacer y={MEDIUM_GAP} />
        <Grid.Container
          gap={MEDIUM_GAP}
          justify="space-between"
          alignItems="center"
        >
          <Grid>
            <Text h3>
              <InternalLink href="/">QUIKK</InternalLink>
            </Text>
          </Grid>
          <Grid>
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
        </Grid.Container>
        <Spacer y={SMALL_GAP} />
      </Container>
    </header>
  );
};

export default Header;
