"use client";
import styled from "styled-components";
import LoginPopupPage from "@/app/Components/Loginpopup";
import { MdOutlineContactSupport } from "react-icons/md";
import ImageView from "@/app/Components/Image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useApi from "@/app/Hooks/useApi";
import { useSelector } from "react-redux";
import { profileState } from "@/app/Redux/profileSlice";
import { urlObj } from "@/app/utils/url";

const login = "/assets/images/login.webp";

export default function Login() {
  const [showloginPopup, setShowloginPopup] = useState(false);
  const { token, email } = useSelector(profileState);
  const router = useRouter();

  return (
    <Wrapper>
      <SettingButton>
        <MdOutlineContactSupport color="white" /> Help & Support
      </SettingButton>
      <LoginWrapper>
        <StyledImage src={login} alt="" width={300} height={120} />
        <SubscribeText>Login to Disney+ Hotstar</SubscribeText>
        <Text>
          Start watching from where you left off, personalise for kids and more
        </Text>
        <SubscribeButton
          onClick={() => {
            setShowloginPopup(true);
            router.push("#login", undefined, { shallow: true });
          }}
        >
          Login
        </SubscribeButton>
      </LoginWrapper>
      {showloginPopup && (
        <LoginPopupPage setShowloginPopup={setShowloginPopup} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 0 0;
  @media (max-width: 600px) {
    padding: 1rem 1rem 0 0;
  }
`;
const StyledImage = styled(ImageView)`
  width: 300px;
  height: 120px;
  object-fit: cover;
  @media (max-width: 600px) {
    object-fit: contain;
    width: 250px;
    height: 120px;
  }
`;
const SettingButton = styled.button`
  background: var(--bg_color600);
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--white_color);
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: var(--FONT-FAMILY);
  transition: all 0.3s ease-in-out;
  margin-left: auto;
  &:hover {
    background: var(--bg_color500);
    transform: scale(1.02);
  }
  @media (max-width: 600px) {
    background: none;
    font-size: 14px;
    font-weight: 400;
    padding: 0px 0px 8px 0;
    margin-left: 0rem;
    margin-bottom: 0.5rem;
    &:hover {
      background: none;
      transform: none;
    }
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 1rem;
`;
const SubscribeText = styled.button`
  display: flex;
  color: var(--text-color900);
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
  background: none;
  border: none;
  outline: none;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
    align-items: start;
    text-align: left;
    margin-top: 1.3rem;
  }
`;
const Text = styled.p`
  color: var(--text-color1000);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  font-family: var(--FONT-FAMILY);
`;
const SubscribeButton = styled.button`
  background: var(--button-gradieent-color);
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--white_color);
  font-size: 20px;
  font-weight: 600;
  padding: 15px 95px;
  border-radius: 8px;
  font-family: var(--FONT-FAMILY);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 400;
    padding: 8px 24px;
    margin-top: 0.5rem;
  }
`;
