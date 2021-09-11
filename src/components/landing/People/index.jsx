import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { ProfileCard, ProfileCardContents, ProfileCardName, ProfileImage } from 'components/common/ProfileCard';
import { Wrapper, LeaderGrid, MemberGrid, Item, Content } from './styles';
import leaders from "./leadership.json"
import members from "./members.json"

export const People = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper as={Container} id="people">
            <h2>People</h2>
            <h3>Leadership</h3>
            <LeaderGrid>
                {leaders.map(({ id, name, role, start_year, end_year, blurb, image_url, github, url, linkedin }) => (
                    <Item key={id} theme={theme}>
                        <ProfileCard theme={theme}>


                            <ProfileImage src={image_url} alt={name}></ProfileImage>
                            <ProfileCardContents>
                                <Content>

                                    <ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
                                    <h4>{role}</h4>
                                    <p>{blurb}</p>
                                    <small>{start_year}-{end_year}</small>

                                </Content>
                            </ProfileCardContents>
                        </ProfileCard>
                    </Item>
                ))}
            </LeaderGrid>
            <h3>Membership</h3>
            <MemberGrid>
                {members.map(({ id, name, role, start_year, end_year, blurb, image_url, github, url, linkedin }) => (
                    <Item key={id} theme={theme}>
                        <ProfileCard theme={theme}>


                            {/* <ProfileImage src={image_url} alt={name}></ProfileImage> */}
                            <ProfileCardContents>
                                <Content>

                                    <ProfileCardName github={github} name={name} id={id} url={url} linkedin={linkedin}></ProfileCardName>
                                    <h4>{role}</h4>
                                    <p>{blurb}</p>
                                    <small>{start_year}-{end_year}</small>

                                </Content>
                            </ProfileCardContents>
                        </ProfileCard>
                    </Item>
                ))}
            </MemberGrid>

        </Wrapper>
    );
};
