import React from "react";
import { Grid, Text, Collapse } from "@geist-ui/react";
import { breakpoints, XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import Title from "../misc/Title";

const Use = ({ service }) => {
	const { title, use } = service;
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
			</Grid.Container>
		</Container>
	);
};

export default Use;
