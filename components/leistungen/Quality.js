import React from "react";
import { Grid, Text } from "@geist-ui/react";
import { XTRA_LARGE_GAP, XXL_GAP } from "../../src/constants";
import Container from "../layout/Container";
import TitleWithDesc from "../misc/TitleWithDesc";
import { Award, Coffee, UserCheck } from "@geist-ui/react-icons";

const Quality = ({ heading = true }) => {
	return (
		<section>
			<Container spacing>
				<Grid.Container gap={XTRA_LARGE_GAP}>
					{heading && (
						<TitleWithDesc
							title="Wieso wir?"
							desc="Wir leben die Softwareentwicklung und setzen auf eine vertrauensvolle und professionelle Zusammenarbeit mit Ihnen. Wir halten nichts von großen Worten und lassen lieber Taten sprechen, dennoch möchten wir unser Gesamtpaket kurz und kompakt präsentieren."
						/>
					)}
					{[
						{
							icon: <Award />,
							title: "Fachkenntnisse",
							content: [
								"Eingespieltes, junges Team",
								"Studierte Informatiker",
								"Mehrjährige Berufserfahrung",
								"Branchenübergreifende Projekte",
							],
						},
						{
							icon: <Coffee />,
							title: "Unsere Werte",
							content: [
								"Dynamisches und offenes Mindset",
								"Transparente Kommunikationsweise",
								"Langer Atem und Durchhaltevermögen",
								"Anpackermentalität: Wir sind Macher",
							],
						},
						{
							icon: <UserCheck />,
							title: "Ihre Vorteile",
							content: [
								"Vielseitige Dienstleistungen",
								"Aktive Mitsprache und Mitgestaltung",
								"Clean Code und wartbare Lösungen",
								"Transparente Kostenaufstellung",
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

export default Quality;
