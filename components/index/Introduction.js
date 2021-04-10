import { Grid } from "@geist-ui/react";
import React from "react";
import { XXL_GAP } from "../../src/constants";
import Container from "../layout/Container";
import joyce from "../../assets/images/joyce_landing.jpg";
import minden from "../../assets/images/minden.jpg";
import code from "../../assets/images/code.jpg";
import IntroductionSection from "./IntroductionSection";

const Introduction = () => {
	return (
		<section>
			<Container spacing>
				<Grid.Container gap={XXL_GAP} alignItems="center">
					<IntroductionSection
						src={joyce}
						title="Ihr Partner"
						content="QUIKK Software aus Minden konzipiert und entwickelt individuelle Softwarelösungen und Webdesigns nach Ihren Vorstellungen. Unseren Fokus setzen wir dabei auf agile Softwareentwicklung, eine transparente Kommunikation und eine strukturierte Arbeitsweise, um Ihnen sauberes und wartbares Coding zu liefern. Ohne Wenn und Aber."
						alt="QUIKK Software Minden Geschäftsführer Joyce Marvin Rafflenbeul"
					/>
					<IntroductionSection
						src={minden}
						title="In Minden"
						content="Unser Büro liegt im wunderschönen Minden an der Weser in Ostwestfalen. In der Vergangenheit haben wir bereits viele Kunden aus der Region Hannover, Bielefeld und Osnabrück unterstützt. Sie sind weiter entfernt? Dank digitaler Absprachen und Remote Work können wir auch trotz großer Distanzen erfolgreich zusammenarbeiten."
						revert={true}
						alt="Minden (Ostwestfalen), NRW: QUIKK Software Standort Hahler Straße 285, 32427 Minden"
					/>
					<IntroductionSection
						src={code}
						title="Mit Erfahrung"
						content="Zunächst als Einzelunternehmer, seit Oktober 2020 im Team: Unser Geschäftsführer Joyce startet gemeinsam mit weiteren studierten Informatikern voll durch und kann auf mehrjährige Erfahrung in der Web- und Anwendungsentwicklung zurückgreifen. Wir sind Ihr Ansprechpartner für agile Softwareentwicklung und Webdesign in Minden."
						alt="QUIKK Software Minden: Code, Softwareentwicklung und Webdesign"
					/>
				</Grid.Container>
			</Container>
		</section>
	);
};

export default Introduction;
