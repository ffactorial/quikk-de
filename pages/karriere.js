import { Grid, Note, Text } from "@geist-ui/react";
import React from "react";
import Container from "../components/layout/Container";
import CarreerCard from "../components/karriere/CarrerCard";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import TitleWithDesc from "../components/misc/TitleWithDesc";
import { XTRA_LARGE_GAP } from "../src/constants";
import ExternalLink from "../components/misc/ExternalLink";

const karriere = () => {
  const jobs = [
    {
      title: "Praktikum",
      subtitle: "im Bereich Softwareentwicklung",
      content:
        "Du hast bereits erste Erfahrungen in der IT sammeln können, oder sogar Vorkenntnisse in einer oder mehreren Programmiersprachen? Wir freuen uns, Dir Einblicke in unseren Node.js Technologie Stack und unsere Arbeitsweise zu geben.",
    },
    {
      title: "Schulpraktikum",
      subtitle: "im Bereich Softwareentwicklung",
      content:
        "Informatik fasziniert Dich? Wir zeigen Dir, wie wir an Kundenprojekten arbeiten und bringen Dich mit der Entwicklung von Software in Kontakt: Bei uns lernst Du JavaScript Grundlagen und entwickelst eigene Anwendungen.",
    },
  ];

  const title = "Karriere";
  const desc =
    "Wir freuen uns über motivierte Personen, die sich unserem Team anschließen wollen. Nichts für Dich dabei? Wir warten gespannt auf Deine Initiativbewerbung.";

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
              <ExternalLink href="mailto:info@quikk.de">
                info@quikk.de
              </ExternalLink>
              .
            </Note>
          </Grid>
          {jobs.map((job) => (
            <CarreerCard {...job} />
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};

export default karriere;
