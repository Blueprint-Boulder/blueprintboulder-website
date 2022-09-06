import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Button, Container } from 'components/common';
import { ProfileCard, ProfileCardContents, ProfileCardName, ProfileImage } from 'components/common/ProfileCard';
import { Wrapper, PersonGrid, Item, Content } from './styles';
import leaders from "./leadership.json"

export const People = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper as={Container} id="people">
            <h2>People</h2>
            <PersonGrid>
                {leaders.map(({ id, name, role, start_year, end_year, image_url, github, url, linkedin }) => (
                    <Item key={id} theme={theme}>
                        <ProfileCard theme={theme}>


                            <ProfileImage src={image_url} alt={name}></ProfileImage>
                            <ProfileCardContents>
                                <Content>

                                    <ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
                                    <h4 style={{color: (theme === "dark" ? '#73b7ff' : '#034387'), fontWeight: '500'}}>{role}</h4>
                                    <small>{start_year}-{end_year}</small>

                                </Content>
                            </ProfileCardContents>
                        </ProfileCard>
                    </Item>
                ))}
            </PersonGrid>
            <Button>
                <a href="/people" style={{ color: "white" }}>
                    Meet all of Blueprint!
                </a>
            </Button>
        </Wrapper>
    );
};
