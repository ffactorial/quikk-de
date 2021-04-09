import React from "react";
import Links from "./Links";
import ExternalLink from "../../misc/ExternalLink";

const LocationLinks = () => {
	return (
		<Links
			content={[
				<ExternalLink href="https://g.page/quikk?share">
					Hahler Straße 285
				</ExternalLink>,
				<ExternalLink href="https://g.page/quikk?share">
					32427 Minden
				</ExternalLink>,
			]}
		/>
	);
};

export default LocationLinks;
