//Michal Bodzianowski 2021
import styled from 'styled-components';
import React, { useContext } from 'react';
import current from "../../landing/Projects/current.json";
import past from "../../landing/Projects/past.json";
import { ThemeContext } from '../../../providers/ThemeProvider.jsx';


export const ProfileCard = styled.div`
  padding: 0rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;

export const ProfileCardLite = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0rem;
  
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
`;

function ProfileProjectsItem(props) {
  const { theme } = useContext(ThemeContext);

  return (props.lite ? <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        backgroundClip: 'content-box',
        outlineColor: theme === "light" ? "#0078f8" : "#001a36",
        outlineStyle: "solid",
        outlineWidth: "1px",
        color: '#0078f8',
        borderRadius: "5px",
        alignItems: "center", justifyContent: "center",
        width: "100%",
        height: "100%",
        maxHeight: "3rem",
        overflow: "hidden",
      }}>
      <div style={{
        flex: 1,
        maxHeight: "1rem",
        overflow: "hidden", alignItems: "center", justifyContent: "center"
      }}>
        <img
          style={{
            marginBottom: 0,
            objectFit: "cover",
            height: "1.5rem",
            width: 'min'
          }}
          src={props.data.img} alt={props.data.name}></img>
      </div>
      <div style={{
        width: "100%",
        backgroundColor: theme === "light" ? "#0078f8" : "#002752",
        color: "#fff", flex: 1, fontSize: "0.5rem", textAlign: 'center', alignItems: "center", justifyContent: "center", display: "flex"
      }}>
        <div style={{
        }}>{props.data.name}</div>
      </div>
    </div>
  </>
    ://non-lite below
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          outlineColor: theme === "light" ? "#0078f8" : "#001a36",
          outlineStyle: "solid",
          backgroundClip: 'content-box',
          overflow: 'hidden',
          outlineWidth: "1px",
          color: '#0078f8',
          borderRadius: "10px",
          alignItems: "center", justifyContent: "center",
          width: "fit-content",
          height: "100%",
        }}>
        <div style={{
          flex: 1,
          maxHeight: "3rem",
          overflow: "hidden", alignItems: "center", justifyContent: "center"
        }}>
          <img
            style={{

              marginBottom: 0,
              objectFit: "cover",
              height: "3rem",
              width: "100%"

            }}
            //rgb(24, 23, 23)
            src={props.data.img} alt={props.data.name}></img>
        </div>
        <div style={{
          width: "100%",

          backgroundColor: theme === "light" ? "#0078f8" : "#002752",
          color: "#fff", flex: 1, fontSize: "0.75rem", paddingLeft: '0.5rem', paddingRight: '0.5rem', textAlign: 'center', alignItems: "center", justifyContent: "center", display: "flex"
        }}>
          <div style={{

          }}>{props.data.name}</div>
        </div>
      </div>
    </>)
}

export function ProfileProjects(props) {
  if (props !== undefined && props.name !== "") {
    let projectList = [];
    for (let i = 0; i < current.length; i++) {
      if (current[i].members !== undefined && current[i].members.includes(props.name)) {
        projectList.push({ "name": current[i].name, "img": current[i].image_url });
      }
    }

    for (let i = 0; i < past.length; i++) {
      if (past[i].members !== undefined && past[i].members.includes(props.name)) {
        projectList.push({ "name": past[i].name, "img": past[i].image_url });
      }
    }

    if (projectList.length > 0) {
      return (props.lite ? <>
        {/* <div style={{flexGrow:1}}></div> */}
        <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
          <div style={{
            marginLeft: 'auto',
            display: "grid",
            padding: '0.5rem',
            alignSelf: 'end',
            gridTemplateColumns: 'repeat(' + Math.ceil(projectList.length / 2) + ', 1fr)',
            gap: '4px',
            justifyContent: 'right',
            justifyItems: 'right',
            alignContent: 'right',
            alignItems: 'right',

          }}>
            {
              (Math.ceil(projectList.length / 2) !== projectList.length / 2 && <div></div>)
            }
            {projectList.map((proj) => {
              return <ProfileProjectsItem lite data={proj}></ProfileProjectsItem>
            })}

          </div>
        </div>
      </>
        : //not lite
        <>
          <h6>Projects</h6>
          <div style={{
            display: "grid",
            gridTemplateColumns: 'repeat(' + projectList.length + ', 1fr)',
            gap: '0.3rem',
            justifyContent: 'space-evenly',
            justifyItems: 'left',
            alignContent: 'space-evenly',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            {projectList.map((proj) => {
              return <ProfileProjectsItem data={proj}></ProfileProjectsItem>
            })}
          </div>
        </>)
    } else {
      return <></>
    }
  } else {
    return <></>
  }
}

export function ProfileImage(props) {
  if (props.src !== undefined && props.src !== "") {
    return <img src={props.src} alt={props.alt} style={{ 'marginBottom': 0, 'width': "100%" }}></img >;
  } else {
    return <img src="/profiles/empty.png" alt="Empty" style={{ 'marginBottom': 0, 'width': "100%" }}></img >;
  }
}

export function ProfileImageLite(props) {
  if (props.src !== undefined && props.src !== "") {
    return <div style={{ 'marginBottom': 0, 'maxWidth': "8rem", maxHeight: '14rem', flexGrow: "1", overflow: "hidden" }}><img src={props.src} alt={props.alt} style={{ 'marginBottom': 0, 'height': '100%', objectFit: 'cover' }}></img ></div>
  } else {
    return <div style={{ 'marginBottom': 0, 'maxWidth': "8rem", maxHeight: '14rem', flexGrow: "1", overflow: "hidden" }}><img src="/profiles/empty.png" alt="Empty" style={{ 'margin-bottom': 0, 'height': '100%', objectFit: 'cover' }}></img ></div>;
  }
}


export const ProfileCardContents = styled.div`
padding-bottom: 1rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0;

`;

export const ProfileCardContentsLite = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-left: 1rem;
padding-top: 1rem;
flex-grow: 1;
`;

export function ProfileCardName(props) {
  return <h3 style={{ color: "#0078f8", width: "fit-content", marginBlockStart: 0, marginBlockEnd: 0, }}>
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
