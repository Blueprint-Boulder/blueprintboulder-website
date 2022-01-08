import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  @media (min-width: 1450px) {
    background-image: url(${overlayIllustration});
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#0078E8' : '#fff')};

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
  
  
  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 90%;
  }
`;
