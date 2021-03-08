import { Grid, Note, Text } from "@geist-ui/react";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import Title from "../components/misc/Title";
import { XTRA_LARGE_GAP } from "../src/constants";

const projekte = () => {
  return (
    <>
      <TitleAndDesc title="Projekte" desc="Kundenprojekte" />
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <Grid xs={24} direction="column">
            <Title title="Projekte" centered={false} />
          </Grid>
          <Grid xs={24}>
            <Note label="Info">
              Eine vollständige Übersicht unserer Kundenprojekte folgt in Kürze.
            </Note>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default projekte;
