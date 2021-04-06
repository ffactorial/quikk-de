import { Themes } from "@geist-ui/react";

const expressiveness = {
	linkStyle: "none",
	linkHoverStyle: "none",
};

export const QUIKK_light = Themes.createFromLight({
	type: "QUIKK_light",
	palette: {
		foreground: "#222D36",
		background: "#fefefe",
		success: "#fd921b",
		link: "#fd921b",
	},
	expressiveness,
});

export const QUIKK_dark = Themes.createFromDark({
	type: "QUIKK_dark",
	palette: {
		foreground: "#fefefe",
		background: "#222D36",
		link: "#fd921b",
	},
	expressiveness,
});
