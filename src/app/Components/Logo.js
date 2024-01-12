import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const logo = "/assets/icons/logo-d-plus.svg";
export default function Logo() {
  return (
    <LogoWrapper>
      <Image src={logo} alt="disney-logo" width={51} height={40} />
      <SubscribeBtn>
        <Text> Subscribe</Text>
        <SideArrow />
      </SubscribeBtn>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: fixed;
  padding: 32px 32px 32px 5px;
`;
const Image = styled(ImageView)``;

const SubscribeBtn = styled.div`
  padding: 0.2rem 0.2rem 0.2rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: var(--text-color-gradient1000);
  background: var(--bg_color900);
  font-family: var(--FONT-FAMILY);
`;

const SideArrow = styled(KeyboardArrowRightIcon)`
  color: var(--gold-color);
  width: 20px;
  height: 20px;
`;
const Text = styled.p`
  background: var(--text-color-gradient1000);
  font-size: 12px;
  font-weight: 500;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: var(--FONT-FAMILY);
`;
