import { useMediaQuery } from "@geist-ui/react";
import { useEffect, useState } from "react";

const useIsMobile = () => {
	const xs = useMediaQuery("xs");
	const sm = useMediaQuery("sm");
	const tmpIsMobile = xs || sm;
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(tmpIsMobile);
	});

	return typeof document !== "undefined" ? isMobile : false;
};

export default useIsMobile;
