import { Grid, Note } from "@geist-ui/react";
import React from "react";
import Container from "../components/layout/Container";
import CarreerCard from "../components/karriere/CarrerCard";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import TitleWithDesc from "../components/misc/TitleWithDesc";
import { XTRA_LARGE_GAP } from "../src/constants";
import ExternalLink from "../components/misc/ExternalLink";
import { getJobs } from "../utils/strapi";

const karriere = ({ jobs }) => {
  const title = "Karriere";
  const desc =
    "Wir freuen uns über motivierte Personen, die sich unserem Team anschließen wollen. Nichts für Dich dabei? Schick uns Deine Initiativbewerbung!";

  return (
    <>
      <TitleAndDesc {...{ title, desc }} />
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <TitleWithDesc {...{ title, desc }} />
          <Grid xs={24}>
            <Note label="Bewerbungen">
              Hast Du Lust auf Softwareentwicklung, Kundenkontakt und
              Startup-Atmosphäre? Schick uns Deine Bewerbungsunterlagen an{" "}
              <ExternalLink href="mailto:info@quikk.de" color>
                info@quikk.de
              </ExternalLink>
              .
            </Note>
          </Grid>
          {jobs.map((job, i) => (
            <CarreerCard key={i} {...job} />
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};

export default karriere;

export async function getStaticProps() {
  const jobs = await getJobs();
  return {
    props: { jobs },
    revalidate: 1,
  };
}
