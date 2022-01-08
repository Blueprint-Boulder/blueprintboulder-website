import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavbarLinks = ({ desktop }) => {


  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink to="/">Home</AnchorLink>
      <AnchorLink to="/#about">About</AnchorLink>
      <AnchorLink to="/projects">Projects</AnchorLink>
      <AnchorLink to="/work-with-us">Work with us</AnchorLink>
      <AnchorLink to="/people">People</AnchorLink>
      <AnchorLink to="/#contact">Contact</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
