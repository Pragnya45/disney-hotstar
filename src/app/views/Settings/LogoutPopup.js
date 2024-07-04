import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import ImageView from "@/app/Components/Image";
import { useDispatch } from "react-redux";
import { logoutFn } from "@/app/Redux/logoutSlice";
import { useRouter } from "next/navigation";

function LogoutPopup({ setShowPopup }) {
  const logout = "/assets/images/logout.webp";
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Wrapper>
      <LoginPopup>
        <CloseButton onClick={handleClose}>
          <Close size={32} color="#707a94" />
        </CloseButton>
        <Logout src={logout} alt="logout" width={200} height={170} />
        <Heading>Are you sure you want to log out?</Heading>
        <SubHeading>
          You will be asked to log in again to watch your favourites.
        </SubHeading>
        <ButtonContainer>
          <Cancel onClick={() => setShowPopup(false)}>Cancel</Cancel>
          <LogOut
            onClick={() => {
              dispatch(logoutFn());
              router.push("/");
            }}
          >
            Logout
          </LogOut>
          ;
        </ButtonContainer>
      </LoginPopup>
    </Wrapper>
  );
}

export default LogoutPopup;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--overlay-color-3);
`;
const LoginPopup = styled.div`
  position: absolute;
  width: 50%;
  height: 60%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background: #16181f;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  gap: 0.3rem;
`;
const Close = styled(IoMdClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 22px;
  font-weight: 600;
  color: var(--text-color900);
  margin-top: 1rem;
`;
const SubHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 18px;
  font-weight: 400;
  color: var(--text-color1000);
  margin-top: 0.5rem;
`;
const CloseButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const Logout = styled(ImageView)`
  object-fit: cover;
  margin-top: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
`;
const LogOut = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-grow: 1;
  color: white;
  background: var(--button-gradieent-color);
  border-radius: 8px;
  justify-content: center;
  border: none;
  padding: 1rem 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 3rem;
`;
const Cancel = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  flex-grow: 1;
  background: var(--bg_color700);
  border-radius: 8px;
  justify-content: center;
  border: none;
  padding: 1rem 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 3rem;
`;
