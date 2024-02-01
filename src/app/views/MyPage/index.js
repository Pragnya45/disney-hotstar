import React from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const star = "assets/icons/stars.svg";
function MyPage() {
  return (
    <Wrapper>
      <SubscribeWrapper>
        <LeftContent>
          <SubscribeText>
            Subscribe to enjoy Disney+ Hotstar
            <SideArrow />
          </SubscribeText>
          <SubscribeNumber>+91 9********8‬</SubscribeNumber>
        </LeftContent>
      </SubscribeWrapper>
      <HoriZontalLine></HoriZontalLine>
    </Wrapper>
  );
}

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6rem;

  background: url(${star}) no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
`;
const SubscribeWrapper = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;
const HoriZontalLine = styled.div`
  background: var(--horizontal-gradient-color);
  height: 1px;
  width: 100%;
  opacity: 0.3;
`;
const LeftContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const SubscribeText = styled.button`
  display: flex;
  color: var(--text-color900);
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  background: none;
  border: none;
  outline: none;
`;
const SideArrow = styled(ChevronRightIcon)`
  width: 25px;
  height: 25px;
  margin-left: 0.3rem;
  color: var(--text-color900);
`;
const SubscribeNumber = styled.p`
  color: var(--text-color900);
  margin-top: 0.5rem;
  font-size: 18px;
  font-weight: 600;
`;
