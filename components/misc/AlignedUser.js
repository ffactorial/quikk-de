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

	return isMobile ? (
		<User src={avatar} name={name} style={style} />
	) : (
		<User src={avatar} name={name} style={style}>
			{position}
		</User>
	);
};

export default AlignedUser;
