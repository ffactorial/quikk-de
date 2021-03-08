import { Grid } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import joyce from "../../assets/images/joyce_landing.jpg";
import minden from "../../assets/images/minden.jpg";
import team from "../../assets/images/team.jpg";
import IntroductionSection from "./IntroductionSection";

const Introduction = () => {
  return (
    <section>
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          <IntroductionSection
            src={joyce}
            title="Ihr Partner"
            content="QUIKK Software aus Minden konzipiert und entwickelt individuelle Softwarelösungen und Webdesigns nach Ihren Vorstellungen. Unseren Fokus setzen wir dabei auf agile Softwareentwicklung, eine transparente Kommunikation und eine strukturierte Arbeitsweise, um Ihnen sauberes und wartbares Coding zu liefern. Ohne Wenn und Aber."
            alt="QUIKK Software Geschäftsführer und Ansprechpartner Joyce Rafflenbeul"
          />
          <IntroductionSection
            src={minden}
            title="In Minden"
            content="Unser Büro liegt im wunderschönen Minden an der Weser in Ostwestfalen. Wir haben bereits viele Kunden aus der Region Hannover, Bielefeld und Osnabrück unterstützt. Aber auch mit weiter entfernten Kunden können wir dank digitaler Absprachen und Remote Work erfolgreich zusammenarbeiten."
            revert={true}
            alt="Minden (Ostwestfalen): QUIKK Software Standort"
          />
          <IntroductionSection
            src={team}
            title="Mit Erfahrung"
            content="Zunächst als Einzelunternehmer, seit Oktober 2020 im Team: Unser Geschäftsführer Joyce startet gemeinsam mit zwei weiteren studierten Informatikern voll durch und kann auf mehrjährige Erfahrung in der Web- und Anwendungsentwicklung zurückgreifen. Wir sind Ihr Ansprechpartner für agile Softwareentwicklung und Webdesign in Minden."
            alt="QUIKK Software Team"
          />
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Introduction;
