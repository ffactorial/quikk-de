import {
	Avatar,
	Card,
	Description,
	Display,
	Grid,
	Spacer,
	Text,
	useTheme,
} from "@geist-ui/react";
import { Github, Home, Linkedin, Mail } from "@geist-ui/react-icons";
import React from "react";
import { MEDIUM_GAP } from "../../src/constants";
import ExternalLink from "../misc/ExternalLink";

const ServiceCard = ({
	name = "",
	mail = "",
	position = "",
	linkedin = "",
	github = "",
	homepage = "",
	avatar = "",
	bio = "",
}) => {
	const theme = useTheme();

	const enteredSocials = Object.entries({
		linkedin,
		github,
		homepage,
		mail,
	})
		.map(([key, val]) => (val.length > 0 ? { [key]: val } : null))
		.filter((_) => _).length;

	const SocialWrapper = ({ children, href }) => (
		<Grid xs={24 / enteredSocials} justify="center" alignItems="center">
			<ExternalLink href={href}>{children}</ExternalLink>
		</Grid>
	);

	const Socials = () => (
		<Grid.Container gap={MEDIUM_GAP} alignItems="center" justify="center">
			{mail.length > 0 && (
				<SocialWrapper href={`mailto:${mail}`}>
					<Mail />
				</SocialWrapper>
			)}
			{github.length > 0 && (
				<SocialWrapper href={`https://github.com/${github}`}>
					<Github />
				</SocialWrapper>
			)}
			{linkedin.length > 0 && (
				<SocialWrapper href={`https://linkedin.com/in/${linkedin}`}>
					<Linkedin />
				</SocialWrapper>
			)}
			{homepage.length > 0 && (
				<SocialWrapper href={`https://${homepage}`}>
					<Home />
				</SocialWrapper>
			)}
		</Grid.Container>
	);

	return (
		<Grid xs={24} sm={12} md={8}>
			<Card style={{ height: "100%" }}>
				<Display
					caption={
						<Description
							title={
								<Text
									b
									style={{
										textAlign: "center",
										width: "100%",
										color: theme.palette.foreground,
									}}
								>
									{name}
								</Text>
							}
							style={{ textAlign: "center" }}
							content={
								<>
									<Text style={{ fontWeight: "normal" }} type="secondary">
										{position}
									</Text>
									<Spacer />
									<Socials />
									{bio.length > 0 && (
										<>
											<Spacer />
											<Text style={{ textAlign: "left" }}>{bio}</Text>
										</>
									)}
								</>
							}
						/>
					}
				>
					<Avatar
						src={avatar}
						isSquare
						size="large"
						alt={`${name} ist ${position} bei QUIKK Software`}
					/>
				</Display>
			</Card>
		</Grid>
	);
};

export default ServiceCard;
