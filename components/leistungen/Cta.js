import React from "react";
import { breakpoints, XTRA_LARGE_GAP } from "../../src/constants";
import { Grid, Text, Image, Button } from "@geist-ui/react";
import Container from "../layout/Container";
import InternalLink from "../misc/InternalLink";
import Title from "../misc/Title";
import useIsMobile from "../hooks/useIsMobile";
import joyce from "../../assets/images/team.jpg";

const Cta = ({ title }) => {
	const isMobile = useIsMobile();

	return (
		<Container spacing>
			<Grid.Container
				gap={XTRA_LARGE_GAP}
				alignItems="center"
				justify="center"
				direction={isMobile ? "column" : "row-reverse"}
				style={{ textAlign: "start" }}
			>
				<Grid {...breakpoints} md={16} direction="column">
					<Title title="Gehen Sie den ersten Schritt" centered={false} />
					<Text type="secondary" p>
						Und lassen Sie uns gemeinsam an Ihrem Projekt arbeiten! Dabei spielt
						es keine Rolle, ob Sie am Anfang Ihres Vorhabens stehen, oder wir in
						ein bestehendes Projekt einsteigen. Wir freuen uns über jede
						Herausforderung.
					</Text>
					<InternalLink
						href="/kontakt"
						style={{ width: isMobile ? "100%" : null }}
					>
						<Button type="success" style={{ width: isMobile ? "100%" : null }}>
							Jetzt anfragen
						</Button>
					</InternalLink>
				</Grid>
				<Grid {...{ xs: 24, sm: 24, md: 8, lg: 8 }}>
					<Image src={joyce} alt={`QUIKK Software: ${title}`} />
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default Cta;
