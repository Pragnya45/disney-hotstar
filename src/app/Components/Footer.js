import React from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import ImageView from "./Image";
const facebook_icon = "/assets/icons/facebook.png";
const twitter_icon = "/assets/icons/twitter.png";
const playstore_icon = "/assets/icons/google-playstore.webp";
const appstore_icon = "/assets/icons/ios-appstore.webp";
function Footer() {
  return (
    <FooterWrapper>
      <SectionWrapper>
        <Section>
          <Heading>Company</Heading>
          <AboutUs>About Us</AboutUs>
          <Carreer>Careers</Carreer>
        </Section>
        <Section>
          <Heading>View Website In</Heading>
          <Language>
            <StyledCheck />
            English
          </Language>
        </Section>
        <Section>
          <Heading>Need Help?</Heading>
          <AboutUs>Visit Help Center</AboutUs>
          <Carreer>Share Feedback</Carreer>
        </Section>
        <Section>
          <Heading>Connect with Us</Heading>
          <IconWrapper>
            <Icon src={facebook_icon} alt="facebook" width={28} height={28} />
            <Icon src={twitter_icon} alt="twitter" width={28} height={28} />
          </IconWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <LeftContainer>
          <Rights>© 2023 STAR. All Rights Reserved.</Rights>
          <TermsWrapper>
            <Text>Terms Of Use</Text>
            <Text>Privacy Policy</Text>
            <Text>FAQ</Text>
          </TermsWrapper>
        </LeftContainer>
        <RightContainer>
          <PlayStore
            src={playstore_icon}
            width={140}
            height={40}
            alt="playstore"
          />
          <AppStore
            src={appstore_icon}
            width={140}
            height={40}
            alt="Appstore"
          />
        </RightContainer>
      </SectionWrapper>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  background: var(--bg_color1000);
`;
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: column;
  gap: 1rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.p`
  color: var(--text-color900);
  font-size: 16px;
  font-weight: 600;
  font-family: var(--FONT-FAMILY);
`;
const AboutUs = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 500;
  margin-top: 1.5rem;
  cursor: pointer;
  font-family: var(--FONT-FAMILY);
`;
const Carreer = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.5rem;
  cursor: pointer;
  font-family: var(--FONT-FAMILY);
`;
const Rights = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 500;
  margin-top: 2.5rem;
  cursor: pointer;
  font-family: var(--FONT-FAMILY);
`;
const TermsWrapper = styled.div`
  display: flex;
  gap: 7px;
`;
const Text = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.5rem;
  cursor: pointer;
  font-family: var(--FONT-FAMILY);
`;
const StyledCheck = styled(CheckIcon)`
  color: var(--text-color1000);
  cursor: pointer;
`;
const Language = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: var(--text-color1000);
  font-family: var(--FONT-FAMILY);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-top: 1.5rem;
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--text-color1000);

  cursor: pointer;

  margin-top: 1.5rem;
`;
const Icon = styled(ImageView)`
  object-fit: cover;
`;
const PlayStore = styled(ImageView)`
  object-fit: cover;
`;
const AppStore = styled(ImageView)`
  object-fit: cover;
`;
