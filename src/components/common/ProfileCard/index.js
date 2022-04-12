//Michal Bodzianowski 2021
import styled from 'styled-components';
import React from 'react';

export const ProfileCard = styled.div`
  padding: 0rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;

export function ProfileImage(props) {
  if (props.src !== undefined && props.src !== "") {
    return <img src={props.src} alt={props.alt} style={{ 'margin-bottom': 0, 'width': "100%" }}></img >;
  } else {
    return <img src="/profiles/empty.png" alt="Empty" style={{ 'margin-bottom': 0, 'width': "100%" }}></img >;
  }
}


export const ProfileCardContents = styled.div`
padding-bottom: 1rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0;

`;

export function ProfileCardName(props) {
  return <h3 style={{ color: "#0078f8" }}>
    {props.name}
    <br />
    <ProfileCardWebsite url={props.url} name={props.name} id={props.id}></ProfileCardWebsite>
    <ProfileCardGH github={props.github} name={props.name} id={props.id}></ProfileCardGH>
    <ProfileCardLinkedIn linkedin={props.linkedin} name={props.name} id={props.id}></ProfileCardLinkedIn>
  </h3>
}

export function ProfileCardGH(props) {
  if (props.github !== undefined && props.github !== "") {
    return <a key={props.id + "_gh"} href={"https://github.com/" + props.github} target="_blank" rel="noopener noreferrer" aria-label={`follow ` + props.name + ` on github`}>
      &nbsp;<img style={{ marginBottom: 0 }} width="17" src="/icons/github.svg" alt={props.name} />
    </a>
  }
  return null;
}

export function ProfileCardLinkedIn(props) {
  if (props.linkedin !== undefined && props.linkedin !== "") {
    return <a key={props.id + "_gh"} href={"https://linkedin.com/in/" + props.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`follow ` + props.name + ` on linkedin`}>
      &nbsp;<img style={{ marginBottom: 0 }} width="17" src="/icons/linkedin.svg" alt={props.name} />
    </a>
  }
  return null;
}

export function ProfileCardWebsite(props) {
  if (props.url !== undefined && props.url !== "") {
    return <a key={props.id + "_url"} href={props.url} target="_blank" rel="noopener noreferrer" aria-label={props.name + `'s website`}>
      &nbsp;<img style={{ marginBottom: 0 }} width="17" src="/icons/link.svg" alt={props.name} />
    </a>
  }
  return null;
}
