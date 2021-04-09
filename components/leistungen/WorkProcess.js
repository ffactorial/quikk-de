import { Grid, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import TitleWithDesc from "../misc/TitleWithDesc";
import { BookOpen, RefreshCcw, Gift } from "@geist-ui/react-icons";
import useIsMobile from "../hooks/useIsMobile";

const WorkProcess = ({ heading = true }) => {
	const theme = useTheme();
	const isMobile = useIsMobile();
	return (
		<Container
			spacing
			style={{
				background: theme.palette.accents_1,
			}}
		>
			<Grid.Container gap={XTRA_LARGE_GAP}>
				{heading && (
					<TitleWithDesc
						title="Arbeitsweise"
						desc="Mit Ihnen werden wir gemeinsam die Herausforderungen der digitalen Transformation meistern. Unsere Arbeit basiert auf Qualität, Transparenz und Vertrauen, damit wir einen erfolgreichen Projektabschluss feiern können."
					/>
				)}
				{[
					{
						icon: <BookOpen />,
						title: "Verstehen + Prüfen",
						content: [
							"Erstes Kennenlernen",
							"Konkretisierung des Projektrahmens",
							"Gemeinsame Anforderungsanalyse",
							"Konzeption und Prototyping",
							"Definition von User Stories",
						],
					},
					{
						icon: <RefreshCcw />,
						title: "Umsetzen + Entwickeln",
						content: [
							"Agiles Projektmanagement nach Scrum",
							"Aktive Einbindung des Kunden",
							"Bereitstellung von Zwischenversionen",
							"Transparenz und Flexibilität",
							"Fixpreisgarantie: Kein Kleingedrucktes",
						],
					},
					{
						icon: <Gift />,
						title: "Abschließen + Überzeugen",
						content: [
							"Qualität durch Automatisierte Tests",
							"Nutzerfeedback und Analyse",
							"Weiterentwicklung und Anpassung",
							"Einweisung und Dokumentation",
							"Monitoring und Support",
						],
					},
				].map((_, i) => {
					return (
						<Grid
							key={i}
							xs={24}
							lg={12}
							xl={8}
							direction="column"
							justify="flex-start"
							alignItems="flex-start"
							style={{ textAlign: "start" }}
						>
							<h3
								style={{
									width: "100%",
									// textAlign: isMobile ? "start" : "center",
								}}
							>
								{_.icon}
							</h3>
							<h3
								style={{
									width: "100%",
									// textAlign: isMobile ? "start" : "center",
								}}
							>
								{_.title}
							</h3>
							<ul>
								{_.content.map((__, i) => (
									<li key={i}>
										<Text style={{ margin: 0 }} type="secondary">
											{__}
										</Text>
									</li>
								))}
							</ul>
						</Grid>
					);
				})}
			</Grid.Container>
		</Container>
	);
};

export default WorkProcess;
