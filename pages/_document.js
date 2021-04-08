import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@geist-ui/react";
import { LOADING_CLASS_NAME } from "../src/constants";

class _document extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = CssBaseline.flush();

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styles}
				</>
			),
		};
	}

	render() {
		return (
			<Html>
				<Head />
				<body className={LOADING_CLASS_NAME}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default _document;
