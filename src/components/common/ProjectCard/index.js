//Michal Bodzianowski 2021
import styled from "styled-components";
import React from "react";
import ReactPlayer from "react-player/lazy";
import leaders from "../../landing/People/leadership.json";
import members from "../../landing/People/members.json";
import alumni from "../../landing/People/alumni.json";
import ReactTooltip from "react-tooltip";

export const ProjectCard = styled.div`
  padding: 0rem;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#181717")};
  height: 100%;
`;

export function ProjectImage(props) {
  if (props.src !== undefined && props.src !== "") {
    return (
      <img
        src={props.src}
        alt={props.alt}
        style={{ marginBottom: 0, width: "100%" }}
      ></img>
    );
  } else {
    return (
      <img
        src="/nonprofit_logos/empty.png"
        alt="Empty"
        style={{ marginBottom: 0, width: "100%" }}
      ></img>
    );
  }
}

export function ProjectVideo(props) {
  if (props !== undefined && props.src !== "") {
    return (
      <>
        <ReactPlayer
          light={true}
          controls={true}
          width={"100%"}
          height={"10rem"}
          url={props.src}
        ></ReactPlayer>
        <div
          style={{
            textAlign: "center",
            fontStyle: "italic",
            width: "100%",
            fontSize: "0.75rem",
            color: "#a9c1db",
          }}
        >
          Project Showcase Video
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export function ProjectPersonImg(props) {
  if (props !== undefined && props.src !== "") {
    return (
      <>
        <img
          data-tip={props.alt}
          src={props.src}
          alt={props.alt}
          style={{
            borderRadius: "25%",
            marginBottom: "0",
            maxHeight: "2rem",
            aspectRatio: 1 / 1,
            objectFit: "cover",
          }}
        ></img>
        <ReactTooltip />
      </>
    );
  } else {
    return <></>;
  }
}

export function ProjectMembers(props) {
  if (props !== undefined && props.members) {
    return (
      <>
        <h4 style={{ marginTop: "1rem" }}>Members</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(" +
              (props.members.length > 7
                ? Math.ceil(props.members.length / 2)
                : props.members.length) +
              ", 1fr)",
            gap: "0.3rem",
            justifyContent: "space-evenly",
            justifyItems: "center",
            alignContent: "space-evenly",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {props.members.map((member_name) => {
            //Search for lead name in leadership.json
            for (let i = 0; i < leaders.length; i++) {
              if (leaders[i].name === member_name) {
                //Match!
                return (
                  <ProjectPersonImg
                    key={member_name}
                    src={
                      leaders[i].image_url === ""
                        ? "/profiles/empty.png"
                        : leaders[i].image_url
                    }
                    alt={member_name}
                  ></ProjectPersonImg>
                );
              }
            }

            for (let i = 0; i < members.length; i++) {
              if (members[i].name === member_name) {
                //Match!
                return (
                  <ProjectPersonImg
                    key={member_name}
                    src={
                      members[i].image_url === ""
                        ? "/profiles/empty.png"
                        : members[i].image_url
                    }
                    alt={member_name}
                  ></ProjectPersonImg>
                );
              }
            }

            for (let i = 0; i < alumni.length; i++) {
              if (alumni[i].name === member_name) {
                //Match!
                return (
                  <ProjectPersonImg
                    key={member_name}
                    src={
                      alumni[i].image_url === ""
                        ? "/profiles/empty.png"
                        : alumni[i].image_url
                    }
                    alt={member_name}
                  ></ProjectPersonImg>
                );
              }
            }

            return (
              <ProjectPersonImg
                key={member_name}
                src={"/empty/member.png"}
                alt={member_name}
              ></ProjectPersonImg>
            );
          })}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export const ProjectCardContents = styled.div`
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0;
`;

export function ProjectCardName(props) {
  return (
    <h3 style={{ color: "#0078f8" }}>
      {props.name}
      <ProjectCardWebsite
        url={props.url}
        name={props.name}
        id={props.id}
      ></ProjectCardWebsite>
      <ProjectCardGH
        github={props.github}
        name={props.name}
        id={props.id}
      ></ProjectCardGH>
    </h3>
  );
}

export function ProjectCardGH(props) {
  if (props.github !== undefined && props.github !== "") {
    return (
      <a
        key={props.id + "_gh"}
        href={"https://github.com/" + props.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`follow ` + props.name + ` on github`}
      >
        &nbsp;
        <img
          style={{ marginBottom: 0 }}
          width="17"
          src="/icons/github.svg"
          alt={props.name}
        />
      </a>
    );
  }
  return null;
}

export function ProjectCardWebsite(props) {
  if (props.url !== undefined && props.url !== "") {
    return (
      <a
        key={props.id + "_url"}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.name + `'s website`}
      >
        &nbsp;
        <img
          style={{ marginBottom: 0 }}
          width="17"
          src="/icons/link.svg"
          alt={props.name}
        />
      </a>
    );
  }
  return null;
}
