import React, { useContext } from "react";
import { Button, Layout, Seo } from "components/common";
import { Container, Card, TitleWrap } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import {WorkWelcome, Skills, Contact, Projects } from "../components/landing";
import { Wrapper, Grid, Item, Content, Stats } from '../components/landing/Projects/styles';
import workprocess1 from '../assets/illustrations/workprocess1.png';
import workprocess2 from '../assets/illustrations/workprocess2.png';
import workprocess3 from '../assets/illustrations/workprocess3.png';
import workprocess4 from '../assets/illustrations/workprocess4.png';
import workprocess5 from '../assets/illustrations/workprocess5.png';
import workprocess6 from '../assets/illustrations/workprocess6.png';
import workprocess7 from '../assets/illustrations/workprocess7.png';
import workprocess8 from '../assets/illustrations/workprocess8.png';



const AllProjects = () => (
	<Layout>
		<Seo title="Work With Us" location="/work-with-us" />
		<WorkWelcome />
		<Wrapper as={Container}>
			<h1>Our Process</h1>
<br />
<br />
			<Grid >
				<Item theme={useContext(ThemeContext)}>
				     <img src={workprocess1} alt="" style={{height: "30vh"}} />
				</Item>
				<Item theme={useContext(ThemeContext)}>
				<img src={workprocess2} alt="" style={{height: "30vh"}}/>
				</Item>
				<Item theme={useContext(ThemeContext)}>
				<img src={workprocess3} alt="" style={{height: "30vh"}}/>
				</Item>
				<Item theme={useContext(ThemeContext)}>
                <img src={workprocess4} alt="" style={{height: "30vh"}}/>
                </Item>
                <Item theme={useContext(ThemeContext)}>
                <img src={workprocess5} alt="" style={{height: "30vh"}} />
                </Item>
                <Item theme={useContext(ThemeContext)}>
                <img src={workprocess6} alt="" style={{height: "30vh"}}/>
                </Item>
                <Item theme={useContext(ThemeContext)}>
                <img src={workprocess7} alt="" style={{height: "30vh"}}/>
                </Item>
                <Item theme={useContext(ThemeContext)}>
                <img src={workprocess8} alt="" style={{height: "30vh"}}/>
                </Item>
			</Grid>

		</Wrapper>
	</Layout>
);
export default AllProjects;
