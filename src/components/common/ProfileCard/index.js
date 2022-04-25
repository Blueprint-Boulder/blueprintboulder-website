//Michal Bodzianowski 2021
import styled from 'styled-components';
import React, {useContext} from 'react';
import current from "../../landing/Projects/current.json";
import past from "../../landing/Projects/past.json";
import { ThemeContext } from '../../../providers/ThemeProvider.jsx';


export const ProfileCard = styled.div`
  padding: 0rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;

function ProfileProjectsItem(props){
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background:   '#fff',
        borderColor: theme === "light" ? "#0078f8" : "#001a36",
        borderStyle: "solid",
        borderWidth: "1px",
        color: '#0078f8',
        borderRadius: "10px",
        alignItems: "center", justifyContent: "center",
        width: "fit-content",
        height: "100%",
      }}>
        <div style={{flex: 1, 
            maxHeight: "2rem",
            overflow: "hidden",  alignItems: "center", justifyContent: "center"}}>
          <img 
          style={{
            borderTopLeftRadius: "8.5px",
            borderTopRightRadius: "8.5px",

            marginBottom: 0,
            objectFit:"cover",
            height: "2rem",
            width: "100%"
           
          }}
          //rgb(24, 23, 23)
          src={props.data.img} alt={props.data.name}></img>
        </div>
        <div style={{paddingTop: "0.1rem", paddingBottom: "0.1rem", width: "100%",
        borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px", 
        backgroundColor: theme === "light" ? "#0078f8" : "#002752", 
        color:"#fff", flex: 1, fontSize: "0.5rem", textAlign: 'center', alignItems: "center", justifyContent: "center", display:"flex"}}>
           <div style={{
             paddingLeft: "0.2rem",
             paddingRight: "0.2rem"
           }}>{props.data.name}</div>
        </div>
    </div>
  </>
}

export function ProfileProjects(props){
  if(props!== undefined && props.name !== ""){
    let projectList = [];
    for(let i = 0; i < current.length; i++) {
      if(current[i].members !== undefined && current[i].members.includes(props.name)){
        projectList.push({"name": current[i].name, "img": current[i].image_url});
      }
    }

    for(let i = 0; i < past.length; i++) {
      if(past[i].members !== undefined && past[i].members.includes(props.name)){
        projectList.push({"name": past[i].name, "img": past[i].image_url});
      }
    }

    if(projectList.length > 0){
      return <>
        <h6>Projects</h6>
        <div style={{
        display: "grid",
        gridTemplateColumns: 'repeat('+projectList.length+', 1fr)',
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
      </>
    }else{
      return <></>
    }
  }else{
    return <></>
  }
}

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
