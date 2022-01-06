import React, { useContext } from "react";
import { Button, Layout, Seo } from "components/common";
import { Container, Card, TitleWrap } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import {PeopleWelcome} from "../components/landing";
import { Wrapper, LeaderGrid, MemberGrid, Item, Content} from '../components/landing/People/styles';
import { ProfileCard, ProfileCardContents, ProfileCardName, ProfileImage } from 'components/common/ProfileCard';
import leaders from "../components/landing/People/leadership.json"
import members2122 from "../components/landing/People/members-21-22.json"
import members21spring from "../components/landing/People/members-spring-21.json"



const AllProjects = () => (
	<Layout>
		<Seo title="Work With Us" location="/work-with-us" />
		<PeopleWelcome />
		<Wrapper as={Container} id="people">
			<h1>People</h1>
			<br />
			<h3>Leadership</h3>
			<LeaderGrid>
				{leaders.map(({ id, name, role, start_year, end_year, blurb, image_url, github, url, linkedin }) => (
					<Item key={id} theme={ThemeContext}>
						<ProfileCard theme={ThemeContext}>


							<ProfileImage src={image_url} alt={name}></ProfileImage>
							<ProfileCardContents>
								<Content>

									<ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
									<h4>{role}</h4>
									<p>{blurb}</p>
									<small>{start_year}-{end_year}</small>

								</Content>
							</ProfileCardContents>
						</ProfileCard>
					</Item>
				))}
			</LeaderGrid>
			<h3>2021-2022 Project Team Members</h3>
			<MemberGrid>
				{members2122.map(({ id, name, role, start_year, end_year, blurb, image_url, github, url, linkedin }) => (
					<Item key={id} theme={ThemeContext}>
						<ProfileCard theme={ThemeContext}>


							<ProfileCardContents>
								<Content>

									<ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
									<h4>{role}</h4>
									<p>{blurb}</p>

								</Content>
							</ProfileCardContents>
						</ProfileCard>
					</Item>
				))}
			</MemberGrid>
			<br />
			<br />
			<h3>Spring 2021 Project Team Members</h3>
			<MemberGrid>
				{members21spring.map(({ id, name, role, start_year, end_year, blurb, image_url, github, url, linkedin }) => (
					<Item key={id} theme={ThemeContext}>
						<ProfileCard theme={ThemeContext}>


							<ProfileCardContents>
								<Content>

									<ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
									<h4>{role}</h4>
									<p>{blurb}</p>

								</Content>
							</ProfileCardContents>
						</ProfileCard>
					</Item>
				))}
			</MemberGrid>

		</Wrapper>

	</Layout>
);
export default AllProjects;
