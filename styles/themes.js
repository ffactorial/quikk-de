import { Themes } from "@geist-ui/react";

const expressiveness = {
	linkStyle: "none",
	linkHoverStyle: "none",
};

const dark = "#21242D";
const light = "#FFFFFF";
const success = "#FF584F";

export const QUIKK_light = Themes.createFromLight({
	type: "QUIKK_light",
	palette: {
		foreground: dark,
		background: light,
		success,
	},
	expressiveness,
});

export const QUIKK_dark = Themes.createFromDark({
	type: "QUIKK_dark",
	palette: {
		foreground: light,
		background: dark,
		success,
	},
	expressiveness,
});
