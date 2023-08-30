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
            Blueprint Boulder is open to CU students of any skill level
            who are interested in design, development, or establishing relationships with our non-profit partners.
            Click below to sign up for our interest form, and we'll be in contact with you soon!
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf_rvzbG-OqXEl1x7iKJWV5mv3Nnr9Zp07WFrFu0If-hSjePQ/viewform">
              <Button>
                Interest Form 2023-2024
              </Button>
            </a>
          </div>

        </Details>
        <Details theme={theme}>
          <h1>Are you a Non-profit?</h1>
          <p>
            We accept meeting requests from nonprofits in January and February
            for projects during the following academic year. Our team will collaborate
            with you to plan your software project, and finalists will have their project
            built starting in the fall semester, with completion by the end of the spring semester
          </p>
          <Button>
            <a href="/work-with-us" style={{ color: "white" }}>
              Work with us!
            </a>
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
