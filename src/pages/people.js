import React, { useContext } from "react";
import { Layout, Seo } from "components/common";
import { Container } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import { PeopleWelcome } from "../components/landing";
import { Wrapper, PersonGrid, Item, Content } from '../components/landing/People/styles';
import { ProfileCard, ProfileCardContents, ProfileCardName, ProfileImage } from 'components/common/ProfileCard';
import leaders from "../components/landing/People/leadership.json"
import members from "../components/landing/People/members.json"
import alumni from "../components/landing/People/alumni.json"

const AllProjects = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Layout>
			<Seo title="People" location="/work-with-us" />
			<PeopleWelcome />
			<Wrapper as={Container} id="people">
				<h1>Team</h1>
				<PersonGrid>
					{leaders.map(({ id, name, role, start_year, end_year, image_url, github, url, linkedin }) => (
						<Item key={id} theme={theme}>
							<ProfileCard theme={theme}>


								<ProfileImage src={image_url} alt={name}></ProfileImage>
								<ProfileCardContents>
									<Content>

										<ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
										<h4>{role}</h4>
										<small>{start_year}-{end_year}</small>

									</Content>
								</ProfileCardContents>
							</ProfileCard>
						</Item>
					))}
					{members.map(({ id, name, role, start_year, end_year, image_url, github, url, linkedin }) => (
						<Item key={id} theme={theme}>
							<ProfileCard theme={theme}>

								<ProfileImage src={image_url} alt={name}></ProfileImage>
								<ProfileCardContents theme={theme}>
									<Content>

										<ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
										<h4>{role}</h4>
										<small>{start_year}-{end_year}</small>

									</Content>
								</ProfileCardContents>
							</ProfileCard>
						</Item>
					))}
				</PersonGrid>
				<br />
				<br />
				<h1>Alumni</h1>
				<PersonGrid>
					{alumni.map(({ id, name, role, start_year, end_year, image_url, github, url, linkedin }) => (
						<Item key={id} theme={theme}>
							<ProfileCard theme={theme}>

								<ProfileImage src={image_url} alt={name}></ProfileImage>
								<ProfileCardContents theme={theme}>
									<Content>

										<ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
										<h4>{role}</h4>
										<small>{start_year}-{end_year}</small>

									</Content>
								</ProfileCardContents>
							</ProfileCard>
						</Item>
					))}
				</PersonGrid>

			</Wrapper>

		</Layout>
	)
};
export default AllProjects;
