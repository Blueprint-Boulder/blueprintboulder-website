import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/workwithus.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import { Helmet } from 'react-helmet';
import { googleAnalyticsID } from 'data/config';

export const WorkWelcome = () => {
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
          <h4>Blueprint can help you develop software custom to your unique nonprofit’s needs completely free of charge!</h4>
            <br />
          <Button>
              <a href="https://calendly.com/blueprintboulder/project-scoping"  style={{color: "white"}}>
                  Book your Initial Meeting!
              </a>
          </Button>

        </Details>
        <Thumbnail>
          <img src={dev} alt="We're Blueprint Boulder, and we make tech happen for social good." />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
