import React, { useContext } from "react";
import { Layout, Seo } from "components/common";
import { Button, Container, Card, TitleWrap } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Grid, Item, Content, Stats } from '../components/landing/Projects/styles';
import { ProjectsWelcome } from "../components/landing";
import { ProfileCard, ProfileCardContents, ProfileCardName, ProfileImage } from 'components/common/ProfileCard';
import current from "../components/landing/Projects/current.json"
import past from "../components/landing/Projects/past.json"

const AllProjects = () => (
	<Layout>
		<Seo title="Projects" location="/projects" />
		<ProjectsWelcome />
		<Wrapper as={Container} id="projects">
			{/* TODO: bug - always in dark mode? */}
			<h2>Current Projects</h2>
			<Grid>
				{current.map(({ id, name, session, tldr, description, image_url, github, url }) => (
					<Item key={id} theme={ThemeContext}>
						<ProfileCard theme={ThemeContext}>


							<ProfileImage src={image_url} alt={name}></ProfileImage>
							<ProfileCardContents>
								<Content>

									<ProfileCardName github={github} name={name} id={id} url={url}></ProfileCardName>
									<h4>{tldr}</h4>
									<p>{description}</p>
									<small>{session}</small>

								</Content>
							</ProfileCardContents>
						</ProfileCard>
					</Item>
				))}
			</Grid>
			<br />

			<h2>Past Projects</h2>
			<Grid>

				{past.map(({ id, name, session, tldr, description, image_url, github, url, live_project_url }) => (
					<Item key={id} theme={ThemeContext}>
						<ProfileCard theme={ThemeContext}>


							<ProfileImage src={image_url} alt={name}></ProfileImage>
							<ProfileCardContents>
								<Content>

									<ProfileCardName github={github} name={name} id={id} url={url}></ProfileCardName>
									<h4>{tldr}</h4>
									<p>{description}</p>
									<small>{session}</small>

									<br />
									<br />

									<a href={live_project_url}>
										<Button href={live_project_url}>
											View Project
										</Button>
									</a>

								</Content>
							</ProfileCardContents>
						</ProfileCard>
					</Item>
				))}

			</Grid>

		</Wrapper>
	</Layout>
);
export default AllProjects;
