import React from "react";
import { Layout, Seo, Container, Button } from "components/common";
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Grid, Item, Content } from '../components/landing/Projects/styles';
import { ProjectsWelcome } from "../components/landing";
import { ProjectCard, ProjectCardContents, ProjectImage, ProjectCardName } from 'components/common/ProjectCard';
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
						<ProjectCard theme={ThemeContext}>


							<ProjectImage src={image_url} alt={name}></ProjectImage>
							<ProjectCardContents>
								<Content>

									<ProjectCardName github={github} name={name} id={id} url={url}></ProjectCardName>
									<h4>{tldr}</h4>
									<p>{description}</p>
									<small>{session}</small>

								</Content>
							</ProjectCardContents>
						</ProjectCard>
					</Item>
				))}
			</Grid>
			<br />

			<h2>Past Projects</h2>
			<Grid>

				{past.map(({ id, name, session, tldr, description, image_url, github, url, live_project_url }) => (
					<Item key={id} theme={ThemeContext}>
						<ProjectCard theme={ThemeContext}>


							<ProjectImage src={image_url} alt={name}></ProjectImage>
							<ProjectCardContents>
								<Content>

									<ProjectCardName github={github} name={name} id={id} url={url}></ProjectCardName>
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
							</ProjectCardContents>
						</ProjectCard>
					</Item>
				))}

			</Grid>

		</Wrapper>
	</Layout>
);
export default AllProjects;
