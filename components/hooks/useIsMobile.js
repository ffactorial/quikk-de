import { useMediaQuery } from "@geist-ui/react";

const useIsMobile = () => {
	const xs = useMediaQuery("xs");
	const sm = useMediaQuery("sm");
	const isMobile = xs || sm;

	return typeof document !== "undefined" ? isMobile : false;
};

export default useIsMobile;
