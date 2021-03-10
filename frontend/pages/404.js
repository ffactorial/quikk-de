import { Button, Grid } from "@geist-ui/react";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import InternalLink from "../components/misc/InternalLink";
import TitleWithDesc from "../components/misc/TitleWithDesc";
import { XTRA_LARGE_GAP } from "../src/constants";

const NotFound = () => {
  const title = "404";
  const desc = "Leider konnten wir diese Seite nicht finden.";

  return (
    <>
      <TitleAndDesc {...{ title, desc }} />
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <TitleWithDesc {...{ title, desc }} />
          <Grid xs={24}>
            <InternalLink href="/">
              <Button type="success">Zur Startseite</Button>
            </InternalLink>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default NotFound;
