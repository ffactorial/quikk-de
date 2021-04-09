import React, { useEffect, useState } from "react";
import { Grid, Text } from "@geist-ui/react";
import Title from "../misc/Title";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import useIsMobile from "../hooks/useIsMobile";

const technologies = () => {
	const isMobile = useIsMobile();

	const technologyIcons = [
		"devicon-typescript-plain colored",
		"devicon-javascript-plain colored",
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

	return (
		<Container spacing>
			<Grid.Container gap={XTRA_LARGE_GAP}>
				<Grid xs={24} direction="column">
					<Title title="Technologien" centered={false} />
					<Grid.Container gap={isMobile ? 0 : XTRA_LARGE_GAP}>
						<Grid xs={24} md={12}>
							<Text type="secondary" style={{ marginBottom: 0 }}>
								Eine Vielzahl unserer Lösungen bedient sich an aktuellen
								Technologien aus dem JavaScript Ökosystem. JavaScript war
								ursprünglich als reine Skriptsprache für das Web konzipiert, ist
								heutzutage aber deutlich umfangreicher und vielfältiger
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
								Schnittstellen zum Leben. Für die Persistierung von Daten setzen
								wir MongoDB ein.
							</Text>
						</Grid>
					</Grid.Container>
				</Grid>
				{technologyIcons.map((_, i) => (
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
						<i style={{ fontSize: "3em", textAlign: "center" }} className={_} />
					</Grid>
				))}
			</Grid.Container>
		</Container>
	);
};

export default technologies;
