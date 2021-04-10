import React from "react";
import { Grid } from "@geist-ui/react";
import Hero from "../../components/leistungen/Hero";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import { XTRA_LARGE_GAP } from "../../src/constants";
import Container from "../../components/layout/Container";
import { services } from "./index";
import ServiceFooter from "../../components/leistungen/ServiceFooter";

const DetailServicePage = ({ service }) => {
	const { src, title, content } = service;
	const desc = content;
	return (
		<>
			<TitleAndDesc {...{ title, desc }} />
			<Hero title={title} subtitle={desc} src={src} />
			<Container spacing>
				<Grid.Container
					gap={XTRA_LARGE_GAP}
					alignItems="center"
				></Grid.Container>
			</Container>
			<ServiceFooter />
		</>
	);
};

export async function getStaticPaths() {
	const paths = services.map((service) => {
		const spreadedPath = service.href.split("/");
		const slug = spreadedPath[spreadedPath.length - 1];

		return {
			params: {
				slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const {
		params: { slug },
	} = context;
	const service = services.find((s) => s.href.includes(slug));

	if (!service) {
		return {
			redirect: {
				destination: "/",
				permanent: true,
			},
		};
	}

	return {
		props: { service },
	};
}

export default DetailServicePage;
