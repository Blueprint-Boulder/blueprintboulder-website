import React, { useContext } from "react";
import {  Layout, Seo } from "components/common";
import { Container} from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import {WorkWelcome} from "../components/landing";
import { Wrapper, Grid, Item } from '../components/landing/Projects/styles';
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
			<Grid>
				<Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
				     <img src={workprocess1} alt="Book an initial meeting with us"  />
				</Item>
				<Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
					<img src={workprocess2} alt="Brainstorm project and begin to form a plan" />
				</Item>
				<Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
					<img src={workprocess3} alt="If the project seems like a potential match for our team" />
				</Item>
				<Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
                	<img src={workprocess4} alt="Meet again to hash out details and scope" />
                </Item>
                <Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
                	<img src={workprocess5} alt="If your project seems like on of the most viable options for our team's skills"  />
                </Item>
                <Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
                	<img src={workprocess6} alt="Final design and decision meeting" />
                </Item>
                <Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
                	<img src={workprocess7} alt="Once your project is decided on, a project team is assigned and starts work at the beginning of the fall semester" />
                </Item>
                <Item theme={useContext(ThemeContext)} style={{"box-shadow": "0 0px 0px 0 rgba(0, 0, 0, 0.11)"}}>
                	<img src={workprocess8} alt="Work continues throughout the year with an MVP in the middle of the year and the final project by the end of the spring semester.	" />
                </Item>
			</Grid>

		</Wrapper>
	</Layout>
);
export default AllProjects;
