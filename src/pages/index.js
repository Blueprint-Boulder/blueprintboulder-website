import React from "react";
import { Layout, Seo } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";
import { People } from "components/landing/People";
import Testimonials from "components/landing/Testimonials";

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Skills />
		<Projects />
		<People />
		<Testimonials />
		<Contact />
	</Layout>
);
export default Home;
