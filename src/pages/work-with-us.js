import React, { useContext } from "react";
import { Button, Layout, Seo } from "components/common";
import { Container, Card, TitleWrap } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import {WorkWelcome, Skills, Contact, Projects } from "../components/landing";
import { Wrapper, Grid, Item, Content, Stats } from '../components/landing/Projects/styles';

const AllProjects = () => (
	<Layout>
		<Seo title="Work With Us" location="/work-with-us" />
		<WorkWelcome />
		<Wrapper as={Container}>
			<h1>Our Process</h1>


			<h2>Current Projects</h2>
			<Grid>

				{/* Foster Source */}
				<Item as="a" href="#" target="_blank" rel="noopener noreferrer" theme={useContext(ThemeContext)}>
					<Card theme={useContext(ThemeContext)}>
						<Content>
							{/* TODO: Add this image to our own server */}
							<img src="https://fostersource.org/wp-content/uploads/2018/03/logo.svg" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >
							<br />
							<br />

							<h4>Foster Source</h4>
							<p>Respite matching web-app for foster parents in order to increase retention rates in the foster care system</p>
							<a href="https://fostersource.org/">Learn about their mission</a>
						</Content>
						<TitleWrap>
							<Stats theme={useContext(ThemeContext)}>
								<div margin-right="0">
									<a href="https://github.com/blueprintboulder/f21s22-foster-source">Source Code</a>
								</div>
							</Stats>
						</TitleWrap>
					</Card>
				</Item>

				{/* CIRC */}
				<Item as="a" href="#" target="_blank" rel="noopener noreferrer" theme={useContext(ThemeContext)}>
					<Card theme={useContext(ThemeContext)}>
						<Content>
							{/* TODO: Add this image to our own server */}
							<img src="https://coloradoimmigrant.org/wp-content/uploads/2021/01/CIRClogo-2.png" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >
							<br />
							<br />

							<h4>Colorado Immigrant Rights Coalition</h4>
							<p>Hotline mobile app for immigrants to know their rights and receive assistance in difficult situations</p>
							<a href="https://coloradoimmigrant.org/">Learn about their mission</a>
						</Content>
						<TitleWrap>
							<Stats theme={useContext(ThemeContext)}>
								<div margin-right="0">
									<a href="https://github.com/blueprintboulder/f21s22-circ">Source Code</a>
								</div>
							</Stats>
						</TitleWrap>
					</Card>
				</Item>

				{/* Impact on Education */}
				<Item as="a" href="#" target="_blank" rel="noopener noreferrer" theme={useContext(ThemeContext)}>
					<Card theme={useContext(ThemeContext)}>
						<Content>
							{/* TODO: Add this image to our own server */}
							<img src="https://www.impactoneducation.org/wp-content/themes/ioe/images/ioe-logo.png" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >
							<br />
							<br />

							<h4>Impact on Education</h4>
							<p>Scholarship/education funding portal that uses NLP to redact applicant information</p>
							<a href="https://www.impactoneducation.org/">Learn about their mission</a>
						</Content>
						<TitleWrap>
							<Stats theme={useContext(ThemeContext)}>
								<div margin-right="0">
									<a href="https://github.com/blueprintboulder/f21s22-impact-on-education">Source Code</a>
								</div>
							</Stats>
						</TitleWrap>
					</Card>
				</Item>

			</Grid>
			<br />

			<h2>Past Projects</h2>
			<Grid>

				{/* Thinking Huts */}
				<Item as="a" href="#" target="_blank" rel="noopener noreferrer" theme={useContext(ThemeContext)}>
					<Card theme={useContext(ThemeContext)}>
						<Content>
							{/* TODO: Add this image to our own server */}
							<img src="https://images.squarespace-cdn.com/content/v1/6042bf1791a5fc3798c41aa3/1620657744069-UDLR7D106Y4B1XZUIL7F/2.png?format=1500w" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >
							<br />
							<br />

							<h4>Thinking Huts</h4>
							<p>Web scraping app to remotely gather information about local supplies/contacts to 3D print schools in Madagascar</p>
							<a href="https://www.thinkinghuts.org/">Learn about their mission</a>
						</Content>
						<TitleWrap>
							<Stats theme={useContext(ThemeContext)}>
								<div margin-right="0">
									<a href="https://github.com/blueprintboulder/s21-thinking-huts">Source Code</a>
								</div>
							</Stats>
						</TitleWrap>
					</Card>
				</Item>

				{/* Girls Inc Metro Denver */}
				<Item as="a" href="#" target="_blank" rel="noopener noreferrer" theme={useContext(ThemeContext)}>
					<Card theme={useContext(ThemeContext)}>
						<Content>
							{/* TODO: Add this image to our own server */}
							<img src="https://www.girlsincdenver.org/wp-content/themes/girlsinc/dist/images/logo-primary.png" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >
							<br />
							<br />

							<h4>Girls Inc Metro Denver</h4>
							<p>Pandemic proofing their after school programming with a gamified web app in order to help girls be strong, smart, and bold.</p>
							<a href="https://www.girlsincdenver.org/">Learn about their mission</a>
						</Content>
						<TitleWrap>
							<Stats theme={useContext(ThemeContext)}>
								<div margin-right="0">
									<a href="https://github.com/blueprintboulder/s21-girls-inc">Source Code</a>
								</div>
							</Stats>
						</TitleWrap>
					</Card>
				</Item>

				{/* Safehouse Denver */}
				<Item as="a" href="#" target="_blank" rel="noopener noreferrer" theme={useContext(ThemeContext)}>
					<Card theme={useContext(ThemeContext)}>
						<Content>
							{/* TODO: Add this image to our own server */}
							<img src="https://cdn.firespring.com/images/03bf3c80-7894-42d2-98f4-5c8d8f39c011.jpg" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >
							<br />
							<br />

							<h4>Safehouse Denver</h4>
							<p>Redesigning their Apricot database for ease of operations and better data integrations, which will lead to better data insights and technical sustainability</p>
							<a href="https://safehouse-denver.org/">Learn about their mission</a>
						</Content>
						<TitleWrap>
							<Stats theme={useContext(ThemeContext)}>
								<div margin-right="0">
									{/* TODO: find source code equivalent since this was a low code project */}
									<a href="#">Source Code</a>
								</div>
							</Stats>
						</TitleWrap>
					</Card>
				</Item>

			</Grid>

		</Wrapper>
	</Layout>
);
export default AllProjects;
