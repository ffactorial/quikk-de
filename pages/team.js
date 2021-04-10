import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import PeopleCard from "../components/team/PeopleCard";
import Container from "../components/layout/Container";
import { XTRA_LARGE_GAP } from "../src/constants";
import { Grid } from "@geist-ui/react";
import TitleWithDesc from "../components/misc/TitleWithDesc";
import Quality from "../components/leistungen/Quality";
import { getColleagues } from "../utils/strapi";

const team = ({ people }) => {
	const title = "Unser Team";
	const desc =
		"Wir sind ein junges und dynamisches Team aus engagierten Softwareentwicklern.";

	return (
		<>
			<TitleAndDesc {...{ title, desc }} />
			<Container spacing>
				<Grid.Container gap={XTRA_LARGE_GAP}>
					<TitleWithDesc {...{ title, desc }} />
					{people.map((person, i) => (
						<PeopleCard key={i} {...person} />
					))}
				</Grid.Container>
			</Container>
			<Quality />
		</>
	);
};

export default team;

export async function getStaticProps() {
	const people = await getColleagues();
	return {
		props: { people },
		revalidate: 1,
	};
}
