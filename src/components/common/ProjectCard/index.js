//Michal Bodzianowski 2021
import styled from 'styled-components';
import React from 'react';
import { Button } from 'components/common';

export const ProjectCard = styled.div`
  padding: 0rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;

export function ProjectImage(props) {
  if (props.src !== undefined && props.src !== "") {
    return <img src={props.src} alt={props.alt} style={{ 'margin-bottom': 0, 'width': "100%" }}></img >;
  } else {
    return <img src="/nonprofit_logos/empty.png" alt="Empty" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >;
  }
}

export const ProjectCardContents = styled.div`
padding-bottom: 1rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0;
`;

export function ProjectCardName(props) {
  return <h3 style={{ color: "#0078f8" }}>
    {props.name}
    <ProjectCardWebsite url={props.url} name={props.name} id={props.id}></ProjectCardWebsite>
    <ProjectCardGH github={props.github} name={props.name} id={props.id}></ProjectCardGH>
  </h3>
}

export function ProjectCardGH(props) {
  if (props.github !== undefined && props.github !== "") {
    return <a key={props.id + "_gh"} href={"https://github.com/" + props.github} target="_blank" rel="noopener noreferrer" aria-label={`follow ` + props.name + ` on github`}>
      &nbsp;<img style={{ marginBottom: 0 }} width="17" src="/icons/github.svg" alt={props.name} />
    </a>
  }
  return null;
}

export function ProjectCardWebsite(props) {
  if (props.url !== undefined && props.url !== "") {
    return <a key={props.id + "_url"} href={props.url} target="_blank" rel="noopener noreferrer" aria-label={props.name + `'s website`}>
      &nbsp;<img style={{ marginBottom: 0 }} width="17" src="/icons/link.svg" alt={props.name} />
    </a>
  }
  return null;
}
