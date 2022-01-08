import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, Grid, Item, Content } from './styles';
import { ProjectCard, ProjectCardContents, ProjectImage, ProjectCardName } from 'components/common/ProjectCard';
import current from "./current.json"

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {current.map(({ id, name, session, tldr, description, image_url, github, url }) => (
          <Item key={id} theme={theme}>
            <ProjectCard theme={theme}>


              <ProjectImage src={image_url} alt={name}></ProjectImage>
              <ProjectCardContents>
                <Content>

                  <ProjectCardName github={github} name={name} id={id} url={url}></ProjectCardName>
                  <h4>{tldr}</h4>
                  <p>{description}</p>
                  <small>{session}</small>

                </Content>
              </ProjectCardContents>
            </ProjectCard>
          </Item>
        ))}
      </Grid>
      <br />
      <br />
      <div text-align="center">
        <a href="projects">
          <Button href="projects">
            View All Projects
          </Button>
        </a>
      </div>
    </Wrapper>
  );
};
