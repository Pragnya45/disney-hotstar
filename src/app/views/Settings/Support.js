import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa6";
export default function Support() {
  return (
    <Wrapper>
      <Heading>HELP & SUPPORT</Heading>

      <ParentWrapper>
        <Content>
          <Title>Help Centre</Title>
          <Subtitle>Happy to help!</Subtitle>
        </Content>
        <StyledLeft color="#fff" size={13} />
      </ParentWrapper>
      <ContentWrapper>
        <Content>
          <Title>Send us Feedback</Title>
          <Subtitle>We would love to hear your suggestions</Subtitle>
        </Content>
        <StyledLeft color="#fff" size={13} />
      </ContentWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  padding-top: 10rem;
  width: 100%;
  gap: 3rem;
`;
const Heading = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color900);
`;
const ParentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 25rem;
  gap: 2rem;
  border-bottom: 1px solid var(--bg_color700);
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  width: 25rem;
  gap: 2rem;
`;
const StyledLeft = styled(FaAngleRight)`
  margin-left: auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.p`
  color: var(--text-color900);
  font-size: 16px;
  font-weight: 600;
`;
const Subtitle = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 400;
  margin-top: 0.5rem;
`;
