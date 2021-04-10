import { Grid, Text, useTheme } from "@geist-ui/react";
import React from "react";
import { XTRA_LARGE_GAP, XXL_GAP } from "../../src/constants";
import Container from "../layout/Container";
import TitleWithDesc from "../misc/TitleWithDesc";
import { BookOpen, RefreshCcw, Gift } from "@geist-ui/react-icons";

const WorkProcess = ({ heading = true }) => {
	const theme = useTheme();
	return (
		<section>
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
								"Inkrementelle Entwicklung von Features",
								"Vollständige Transparenz und Flexibilität",
								"Fixpreisgarantie: Kein Kleingedrucktes",
							],
						},
						{
							icon: <Gift />,
							title: "Abschließen + Überzeugen",
							content: [
								"Qualität durch automatisierte Tests",
								"Langlebige und wartbare Lösungen",
								"Übergabe inkl. Einweisung und Dokumentation",
								"Support über die Projektlaufzeit hinaus",
								"Weiterentwicklung und Anpassung möglich",
							],
						},
					].map((_, i) => {
						return (
							<Grid
								key={i}
								xs={24}
								sm={24}
								lg={12}
								md={12}
								xl={8}
								direction="column"
								justify="flex-start"
								alignItems="flex-start"
							>
								<Text
									b
									size={`${XXL_GAP}pt`}
									style={{
										width: "100%",
									}}
								>
									{React.cloneElement(_.icon, { size: "1rem" })} {_.title}
								</Text>
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
		</section>
	);
};

export default WorkProcess;
