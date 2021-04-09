import { useTheme } from "@geist-ui/react";
import React from "react";

const Divider = () => {
	const theme = useTheme();
	return (
		<div className="wrapper">
			<div className="divider"></div>
			<style jsx>{`
				.divider {
					width: 69px;
					height: 2px;
					margin: ${theme.layout.gap} 0;
					border-left: 24.3px solid ${theme.palette.success};
					background-color: ${theme.palette.accents_1};
				}
				.wrapper {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	);
};

export default Divider;
