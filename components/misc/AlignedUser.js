import { User } from "@geist-ui/react";
import React, { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

const AlignedUser = ({ avatar, name, position }) => {
	const tmpIsMobile = useIsMobile();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(tmpIsMobile);
	}, []);

	const style = { padding: 0 };
	const altText = `${name}: ${position} bei QUIKK Software Minden`;

	return React.cloneElement(
		<User src={avatar} name={name} style={style} altText={altText} />,
		{ children: isMobile ? null : position },
	);
};

export default AlignedUser;
