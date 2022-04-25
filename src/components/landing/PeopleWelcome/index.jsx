import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import banner from 'assets/illustrations/team-banner.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { Helmet } from 'react-helmet';
import { googleAnalyticsID } from 'data/config';

export const PeopleWelcome = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Helmet>
        <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
				window.gtag('event', 'page_view', {
					'page_title': 'Home Page',
					page_location: 'Default',
					page_path: '/',
					send_to:'`+ { googleAnalyticsID } + `'
				});
			`}</script>
      </Helmet>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
            <h4>We are students from the University of Colorado Boulder with a keen interest in software and how it can be used to make a positive impact on the word.</h4>
        </Details>
        <Thumbnail>
          <img src={banner} alt="We're Blueprint Boulder, and we make tech happen for social good." />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
