import React from "react";
import { Grid, Text } from "@geist-ui/react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import Title from "../misc/Title";
import useIsMobile from "../hooks/useIsMobile";

const Mission = () => {
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
				<Grid xs={24} sm={14} direction="column">
					<Title title="Unser Versprechen" centered={false} />
					<Text type="secondary" p>
						Wir lassen Sie nicht im Regen stehen und packen da an, wo es
						knifflig wird. In 2-wöchigen Sprints entwickeln wir inkrementelle
						Zwischenversionen Ihrer Lösung und binden Sie aktiv in die
						Mitgestaltung ein. So können wir Ihr Feedback optimal umsetzen und
						dabei gleichzeitig völlig transparent und flexbiel agieren. Nach
						Projektabschluss erhalten Sie selbstverständlich eine Einweisung in
						die Nutzung und den dokumentierten Code.
					</Text>
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default Mission;
