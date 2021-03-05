import { Grid, Note, Spacer } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import TitleAndSubtitle from "../misc/TitleAndSubtitle";
import PeopleCard from "./PeopleCard";
import lukas from "../../assets/images/lukas.jpg";
import joyce from "../../assets/images/joyce.jpg";
import christian from "../../assets/images/christian.png";

const People = () => {
  const people = [
    {
      name: "Joyce M. Rafflenbeul",
      mail: "joyce@quikk.de",
      title: "Gründer und Geschäftsführer",
      linkedin: "jrafflenbeul",
      github: "jrafflenbeul",
      homepage: "",
      avatar: joyce,
      desc:
        "Joyce ist Ihr Ansprechpartner bei Interesse an einer individuellen Lösung. Gemeinsam mit Ihnen wird Joyce mit seiner mehrjährigen unternehmerischen Erfahrung ein erstes Lösungskonzept erarbeiten und vorstellen.",
    },
    {
      name: "Lukas Weidich",
      mail: "lukas@quikk.de",
      title: "Mitbegründer und Softwareentwickler",
      linkedin: "lukasweidich",
      github: "lukasweidich",
      homepage: "lukasweidich.de",
      avatar: lukas,
      desc:
        "Als Entwickler ist Lukas für die technische Konzeption und Umsetzung unserer Produkte zuständig. Darüber hinaus koordiniert Lukas die Arbeitsabläufe und sorgt für eine strukturierte und zielgerichtete Arbeitsweise.",
    },
    {
      name: "Christian Krebel",
      mail: "christian@quikk.de",
      title: "Softwareentwickler und UI Designer",
      linkedin: "christiankrebel",
      github: "christiankrebel",
      homepage: "",
      avatar: christian,
      desc:
        "Christian entwirft benutzerfreundliche UI Komponenten und vollständige Screens für unsere Produkte. Neben dem permanenten Blick für Design und Usability hat Christian ebenfalls die UI Testautomatisierung im Auge.",
    },
  ];

  return (
    <>
      <Spacer y={XTRA_LARGE_GAP} />
      <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
        <TitleAndSubtitle title="Über uns" subtitle="Wer wir sind" />
      </Grid.Container>
      <Container>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <Grid xs={24}>
            <Note style={{ width: "100%" }} label="tl;dr">
              Wir sind ein junges und dynamisches Team aus engagierten
              Informatikern.
            </Note>
          </Grid>
          {people.map((person, i) => (
            <PeopleCard key={i} {...person} />
          ))}
        </Grid.Container>
      </Container>
      <Spacer y={XTRA_LARGE_GAP} />
    </>
  );
};

export default People;
