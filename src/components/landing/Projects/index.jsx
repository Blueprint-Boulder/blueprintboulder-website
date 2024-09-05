import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import { Wrapper, Grid, Item, Content } from "./styles";
import {
  ProjectCard,
  ProjectCardContents,
  ProjectImage,
  ProjectVideo,
  ProjectCardName,
  ProjectMembers,
} from "components/common/ProjectCard";
import current from "./current.json";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>2024-2025 Projects</h2>
      <Grid>
        {current.map(
          ({
            id,
            name,
            session,
            tldr,
            description,
            image_url,
            github,
            url,
            video_url,
            team_leads,
            members,
          }) => (
            <Item key={id} theme={theme}>
              <ProjectCard theme={theme}>
                {video_url ? (
                  <ProjectVideo src={video_url}></ProjectVideo>
                ) : (
                  <ProjectImage src={image_url} alt={name}></ProjectImage>
                )}
                <ProjectCardContents>
                  <Content>
                    <ProjectCardName
                      github={github}
                      name={name}
                      id={id}
                      url={url}
                    ></ProjectCardName>
                    <h4>{tldr}</h4>
                    <p>{description}</p>
                    <ProjectMembers
                      team_leads={team_leads}
                      members={members}
                    ></ProjectMembers>
                    <small>{session}</small>
                    <br />
                  </Content>
                </ProjectCardContents>
              </ProjectCard>
            </Item>
          )
        )}
      </Grid>
      <br />
      <br />
      <div text-align="center">
        <a href="projects">
          <Button href="projects">View All Projects</Button>
        </a>
      </div>
      <br />
      <div>Click above for our completed projects and demos!</div>
    </Wrapper>
  );
};
