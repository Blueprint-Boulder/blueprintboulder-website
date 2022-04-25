import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container} from 'components/common';
import dev from 'assets/illustrations/projects-banner.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { Helmet } from 'react-helmet';
import { googleAnalyticsID } from 'data/config';

export const ProjectsWelcome = () => {
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
          <br />
          <h1>Curious what we do? </h1>
          <br />
          <h4>Every year we help nonprofits amplify their impact through effectively using technology.</h4>

        </Details>
        <Thumbnail>
          <img src={dev} alt="We're Blueprint Boulder, and we make tech happen for social good." />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
