import { Grid, Text } from "@geist-ui/react";
import React from "react";
import Title from "./Title";

const TitleWithDesc = ({
	title = "",
	desc = "",
	small = false,
	grid = true,
	breakpoints = {},
}) => {
	const Content = () => (
		<>
			<Title title={title} centered={false} small={small} />
			{desc.length > 0 && (
				<Text type="secondary" style={{ marginBottom: 0 }}>
					{desc}
				</Text>
			)}
		</>
	);

	return grid ? (
		<Grid xs={24} {...breakpoints} direction="column">
			<Content />
		</Grid>
	) : (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Content />
		</div>
	);
};

export default TitleWithDesc;
