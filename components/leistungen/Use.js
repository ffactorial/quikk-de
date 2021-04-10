import React from "react";
import { Grid, Text } from "@geist-ui/react";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../layout/Container";
import Title from "../misc/Title";

const Use = ({ service }) => {
	const { src, title, content } = service;
	return (
		<section>
			<Container spacing>
				<Grid.Container gap={XTRA_LARGE_GAP}>
					<Title title={`Use Cases für ${title}`} centered={false} />
					<Text type="secondary">coming soon</Text>
				</Grid.Container>
			</Container>
		</section>
	);
};

export default Use;
