import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="Blueprint Boulder" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Are you a CU affiliate?</h1>
          <p>
            Blueprint Boulder is open and looking for CU students of any skill-level, who are Interested
            in design, devlopment, or relations with our non-profit partners. Click below to sign up for our
            interest form, and we'll be in contact with you!
          </p>
          <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf0NldwrKU2F5ypmepXFs26uIfvSAx7nSFEV-mIjQ53s1HeAg/viewform?usp=sf_link">
            <Button>
              Interest Form 2021
            </Button>
          </a>
        </Details>
        <Details theme={theme}>
          <h1>Are you a Non-profit?</h1>
          <p>
            Blueprint Boulder accepts non-profit applications in January and February for projects during the following school year. Projects are vetted by our team,
            and finalists will have their project built starting in the Fall, with estimated completion by the following Spring.
          </p>
          <Button>
            <a href="/work-with-us"  style={{color: "white"}}>
              Work with us!
            </a>
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
