import { Card, Grid, Text, useMediaQuery } from "@geist-ui/react";
import { CheckCircle } from "@geist-ui/react-icons";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import Title from "../components/misc/Title";
import TitleWithDesc from "../components/misc/TitleWithDesc";
import { MEDIUM_GAP, XTRA_LARGE_GAP } from "../src/constants";

const leistungen = () => {
  const isMobilePhone = useMediaQuery("xs");
  const isTablet = useMediaQuery("sm");
  const isMobile = isMobilePhone || isTablet;

  const services = [
    {
      title: "Software",
      subtitle:
        "Mehr Funktionalität und Unterstützung für Ihren Arbeitsalltag.",
      features: [
        "Softwarelösungen nach Ihren Vorstellungen",
        "Verfügbar als Desktop- und Webanwendung",
        "Wahlweise als mobile App für Android und iOS",
        "Intuitive Bedienung der Nutzeroberflächen",
        "Erfassung und Verwaltung von Ressourcen",
        "Kommunikation zwischen Ihren Anwendungen",
        "Anbindung von Server und Datenbank inklusive",
        "Konzeption und Umsetzung von Prototypen",
        "Sauberes und wartbares Coding",
        "Qualität durch automatisierte Tests",
      ],
    },
    {
      title: "Webdesign",
      subtitle: "Für einen attraktiven und professionellen Auftritt im Web.",
      features: [
        "Eine individuelle Website nach Ihrem Geschmack",
        "Präsentieren Sie sich der Online Welt",
        "Eigener Online Shop mit PayPal Zahlung",
        "E-Commerce (eBay, mobile.de) Anbindung",
        "Optimierung für Suchmaschinen (SEO)",
        "Responsive, HTTPS, kostenloses Hosting",
      ],
    },
    {
      title: "Arbeitsweise",
      subtitle:
        "Damit wir mit Ihnen einen erfolgreichen Projektabschluss feiern können.",
      features: [
        "Agile Softwareentwicklung nach Scrum",
        "Konkretisierung des Projektrahmens",
        "Vollständig transparente Kommunikation",
        "Schwerpunkt auf Flexibilität und Feedback",
        "Einweisung in Bedienung und Verwendung ",
        "Fixpreisgarantie: Kein Kleingedrucktes",
      ],
    },
  ];

  const technologies = [
    "devicon-javascript-plain colored",
    "devicon-typescript-plain colored",
    "devicon-nodejs-plain-wordmark colored",
    "devicon-react-original-wordmark colored",
    "devicon-html5-plain-wordmark colored",
    "devicon-css3-plain-wordmark colored",
    "devicon-redux-original colored",
    "devicon-electron-original-wordmark colored",
    "devicon-express-original-wordmark colored",
    "devicon-mongodb-plain-wordmark colored",
    "devicon-npm-original-wordmark colored",
    "devicon-flutter-plain colored",
  ];

  const title = "Leistungen";
  const desc =
    "Wir stehen Ihnen bei der Pflege von altem Code und Entwicklung neuer Projekte zur Seite und kümmern uns um Planung, Konzeption und Umsetzung.";

  return (
    <>
      <TitleAndDesc {...{ title, desc }} />
      <Container spacing>
        <Grid.Container gap={XTRA_LARGE_GAP}>
          <TitleWithDesc {...{ title, desc }} />
          <Grid xs={24} direction="column">
            <Grid.Container gap={XTRA_LARGE_GAP}>
              {services.map(({ title, features, subtitle }, i) => (
                <Grid xs={24}>
                  <Card type="success">
                    <Grid.Container gap={MEDIUM_GAP}>
                      <Grid xs={24} direction="column">
                        <Text h3 style={{ margin: 0, lineHeight: 0.8 }}>
                          {title}
                        </Text>
                        <Text p>{subtitle ?? ""}</Text>
                      </Grid>
                      {features.map((_, j) => (
                        <Grid xs={24} sm={12} key={`${i}-${j}`}>
                          <Card type="lite" shadow>
                            <Grid.Container
                              gap={MEDIUM_GAP}
                              alignItems="center"
                            >
                              <Grid xs={4} md={2} justify="center">
                                <CheckCircle />
                              </Grid>
                              <Grid xs={20} md={22} justify="center">
                                <Text
                                  type="secondary"
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  {_}
                                </Text>
                              </Grid>
                            </Grid.Container>
                          </Card>
                        </Grid>
                      ))}
                    </Grid.Container>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </Grid>
          <Grid xs={24} direction="column">
            <Title title="Technologien" centered={false} />
            <Grid.Container gap={isMobile ? 0 : XTRA_LARGE_GAP}>
              <Grid xs={24} md={12}>
                <Text type="secondary" style={{ marginBottom: 0 }}>
                  Eine Vielzahl unserer Lösungen bedient sich an aktuellen
                  Technologien aus dem JavaScript Ökosystem. JavaScript war
                  ursprünglich als reine Skriptsprache für das Web konzipiert,
                  ist heutzutage aber deutlich umfangreicher und vielfältiger
                  einsetzbar. Wir verwenden JavaScript (ES6+) und TypeScript im
                  Front- und Backend unserer Anwendungen und können so auf
                  aktuelle Tools und Frameworks zurückgreifen.
                </Text>
              </Grid>
              <Grid xs={24} md={12}>
                <Text type="secondary" style={{ marginBottom: 0 }}>
                  Nutzeroberflächen und Webdesigns realisieren wir mit HTML, CSS
                  und React. Für unsere Webanwendungen verwenden wir Next.js,
                  Desktopanwendungen werden mit Electron erstellt. Für mobile
                  Anwendungen kommen React Native oder Flutter zum Einsatz.
                  Node.js und Express.js erwecken unsere Server und REST
                  Schnittstellen zum Leben. Für die Persistierung von Daten
                  setzen wir MongoDB ein.
                </Text>
              </Grid>
            </Grid.Container>
          </Grid>
          {technologies.map((_, i) => (
            <Grid
              alignItems="center"
              justify="center"
              direction="row"
              key={i}
              xs={12}
              sm={8}
              md={6}
              lg={4}
            >
              <i
                style={{ fontSize: "3em", textAlign: "center" }}
                className={_}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};

export default leistungen;
