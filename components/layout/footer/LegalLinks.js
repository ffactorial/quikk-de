import React from "react";
import InternalLink from "../../misc/InternalLink";
import Links from "./Links";

const LegalLinks = () => {
	return (
		<Links
			content={[
				<InternalLink href="/impressum">Impressum</InternalLink>,
				<InternalLink href="/datenschutzerklaerung">Datenschutz</InternalLink>,
			]}
		/>
	);
};

export default LegalLinks;
