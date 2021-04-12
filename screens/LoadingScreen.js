import { Grid, Loading, Spinner } from "@geist-ui/react";
import React from "react";

const LoadingScreen = () => {
	return (
		<Grid.Container
			alignItems="center"
			justify="center"
			style={{ height: "50vh", width: "100%" }}
		>
			<Grid
				xs={24}
				alignItems="center"
				justify="center"
				style={{ height: "100%", width: "100%" }}
			>
				{/* <Loading type="secondary">Loading</Loading> */}
				<Spinner />
			</Grid>
		</Grid.Container>
	);
};

export default LoadingScreen;
