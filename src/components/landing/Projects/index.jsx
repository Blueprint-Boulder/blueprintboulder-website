import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap, Button } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import { ProfileCard, ProfileCardContents, ProfileCardName, ProfileImage } from 'components/common/ProfileCard';
import current from "./current.json"

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(privacy: PUBLIC, first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {current.map(({ id, name, session, tldr, description, image_url, github, url }) => (
          <Item key={id} theme={theme}>
            <ProfileCard theme={theme}>


              <ProfileImage src={image_url} alt={name}></ProfileImage>
              <ProfileCardContents>
                <Content>

                  <ProfileCardName github={github} name={name} id={id} url={url}></ProfileCardName>
                  <h4>{tldr}</h4>
                  <p>{description}</p>
                  <small>{session}</small>

                </Content>
              </ProfileCardContents>
            </ProfileCard>
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
