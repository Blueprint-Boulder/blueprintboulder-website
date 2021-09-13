import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/banner.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>We're Blueprint Boulder, and we've been creating tech for social good since 2020.</h4>

          <Button as={AnchorLink} href="#contact">
            Get in touch!
          </Button>

          <br />
          <br />
          <a href="https://calblueprint.org/" rel="noreferrer" target="_blank">
            Looking for our Berkeley chapter?
          </a>

        </Details>
        <Thumbnail>
          <img src={dev} alt="We're Blueprint Boulder, and we make tech happen for social good." />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
