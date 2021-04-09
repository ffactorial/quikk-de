import { Button, Popover, Text, useTheme } from "@geist-ui/react";
import { Menu } from "@geist-ui/react-icons";
import React, { useState } from "react";
import InternalLink from "../../misc/InternalLink";

const MobileNavBar = ({ pathnames }) => {
	const theme = useTheme();

	const [navBarOpen, setNavBarOpen] = useState(false);
	return (
		<Popover
			visible={navBarOpen}
			onVisibleChange={(visible) => setNavBarOpen(visible)}
			content={Object.entries(pathnames).map(([key, value]) => (
				<InternalLink href={value} key={key} style={{ width: "100%" }}>
					<Popover.Item
						onClick={() => setNavBarOpen(false)}
						style={{ width: "100%" }}
					>
						<Text
							style={{
								fontWeight: "normal",
								color: theme.palette.foreground,
								width: "100%",
								textAlign: "left",
							}}
						>
							{key}
						</Text>
					</Popover.Item>
				</InternalLink>
			))}
			placement="bottomEnd"
			portalClassName="mobile-menu"
			hideArrow
			enterDelay={0}
			leaveDelay={0}
		>
			<Button
				auto
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				onClick={() => setNavBarOpen(!navBarOpen)}
			>
				<Menu color={theme.palette.foreground} />
			</Button>
		</Popover>
	);
};

export default MobileNavBar;
