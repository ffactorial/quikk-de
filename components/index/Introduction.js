import { Grid } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import joyce from "../../assets/images/joyce_landing.jpg";
import minden from "../../assets/images/minden.jpg";
import IntroductionSection from "./IntroductionSection";

const Introduction = () => {
  return (
    <section>
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP} alignItems="center">
          <IntroductionSection
            src={joyce}
            title="Ihr Partner"
            content="QUIKK Software aus Minden konzipiert und entwickelt individuelle Softwarelösungen und Webdesigns nach Ihren Vorstellungen. Unseren Fokus setzen wir dabei auf eine transparente Kommunikation und eine strukturierte Arbeitsweise, um Ihnen sauberes und wartbares Coding zu liefern."
            alt="QUIKK Software Geschäftsführer und Ansprechpartner Joyce Rafflenbeul"
          />
          <IntroductionSection
            src={minden}
            title="In Minden"
            content="Unser Büro liegt im wunderschönen Minden an der Weser in Ostwestfalen. Wir haben bereits viele Kunden aus der Region Hannover, Bielefeld und Osnabrück unterstützt. Aber auch mit weiter entfernten Kunden können wir dank digitaler Absprachen und Remote Work erfolgreich zusammenarbeiten."
            revert={true}
            alt="QUIKK Software Standort: Minden (Ostwestfalen)"
          />
          <IntroductionSection
            src="http://placekitten.com/1600/1200"
            title="Mit Erfahrung"
            content="Zunächst als Einzelunternehmer, seit Oktober 2020 im Team: Unser Geschäftsführer Joyce startet gemeinsam mit zwei weiteren studierten Informatikern voll durch und kann auf mehrjährige Erfahrung in der Web- und Anwendungsentwicklung zurückgreifen."
            alt="QUIKK Software Team"
          />
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Introduction;
