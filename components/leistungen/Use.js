import React from "react";
import {
	Card,
	Grid,
	Text,
	Collapse,
	Display,
	Image,
	Button,
} from "@geist-ui/react";
import { breakpoints, XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import Title from "../misc/Title";
import InternalLink from "../misc/InternalLink";
import joyce from "../../assets/images/team.jpg";
import useIsMobile from "../hooks/useIsMobile";

const Use = ({ service }) => {
	const { src, title, content, use } = service;
	const isMobile = useIsMobile();
	return (
		<Container spacing>
			<Grid.Container
				gap={XTRA_LARGE_GAP}
				alignItems="center"
				justify="center"
				direction="column"
				style={{ textAlign: "start" }}
			>
				<Grid {...breakpoints}>
					<Title title={`Use Cases für ${title}`} centered={false} />
				</Grid>
				<Grid {...breakpoints}>
					<Collapse.Group>
						{use.map(({ title, content }, i) => (
							<Collapse title={title} key={i} initialVisible={i === 0}>
								<Text type="secondary">{content}</Text>
							</Collapse>
						))}
					</Collapse.Group>
				</Grid>
				<Grid xs={24}>
					<Grid.Container
						gap={XTRA_LARGE_GAP}
						alignItems="center"
						justify="center"
						direction={isMobile ? "column" : "row-reverse"}
						style={{ textAlign: "start" }}
					>
						<Grid xs={24} sm={10}>
							<Display>
								<Image src={joyce} />
							</Display>
						</Grid>
						<Grid xs={24} sm={14} direction="column">
							<Title title="Gehen Sie den ersten Schritt" centered={false} />
							<Text type="secondary" p>
								Und lassen Sie uns gemeinsam an Ihrem Projekt arbeiten! Dabei
								spielt es keine Rolle, ob Sie am Anfang Ihres Vorhabens stehen,
								oder wir in ein bestehendes Projekt einsteigen. Wir freuen uns
								über jede Herausforderung.
							</Text>
							<InternalLink
								href="/kontakt"
								style={{ width: isMobile ? "100%" : null }}
							>
								<Button
									type="success"
									style={{ width: isMobile ? "100%" : null }}
								>
									Jetzt anfragen
								</Button>
							</InternalLink>
						</Grid>
					</Grid.Container>
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default Use;
