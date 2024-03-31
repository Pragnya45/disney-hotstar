import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import SliderComponent from "@/app/Components/SliderComponent";
import WatchedSlider from "@/app/Components/WatchedSlider";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ImageView from "@/app/Components/Image";
import DoneIcon from "@mui/icons-material/Done";
import { useRouter } from "next/navigation";
import { releases, cardData } from "../utils/data";

const logo = "/assets/icons/logo-d-plus.svg";
const star = "/assets/icons/stars.svg";
const disney = "/assets/icons/disney.png";
const kids = "/assets/icons/kids.png";
function MyPage() {
  const router = useRouter();
  return (
    <Wrapper>
      <SubscribeWrapper>
        <LeftContent>
          <ImageView src={logo} alt="disney-logo" width={51} height={40} />
          <SubscribeText>
            Subscribe to enjoy Disney+ Hotstar
            <SideArrow />
          </SubscribeText>
          <SubscribeNumber>+91 9********8‬</SubscribeNumber>
        </LeftContent>
        <RightContent>
          <SubscribeColumn>
            <SubscribeButton onClick={() => router.push("/paywall")}>
              Subscribe
            </SubscribeButton>
            <Plan>Plans start at ₹299</Plan>
          </SubscribeColumn>
          <SettingButton>
            <Settings /> Help & Settings
          </SettingButton>
        </RightContent>
      </SubscribeWrapper>
      <HoriZontalLine></HoriZontalLine>
      <ProfileHeader>
        <Header>Profiles</Header>
        <EditButton>
          <Edit />
          Edit
        </EditButton>
      </ProfileHeader>
      <ProfileWrapper>
        <ProfileContent>
          <ProfileContainer>
            <Profile src={disney} alt="disney" width={60} height={60} />
            <SelectButton>
              <Select />
            </SelectButton>
          </ProfileContainer>
          <Username>Pragnya Sahu</Username>
        </ProfileContent>
        <ProfileContent>
          <ProfileContainer>
            <Profile src={kids} alt="disney" width={60} height={60} />
          </ProfileContainer>
          <Username>Kids</Username>
        </ProfileContent>
        <ProfileContent>
          <PlusContainer>
            <Add />
          </PlusContainer>
          <Username>Add</Username>
        </ProfileContent>
      </ProfileWrapper>
      {/* <SliderComponent title="Watchlist" data={releases} /> */}
      <SliderComponent title="Watchlist" data={releases} />
      <HoriZontalWrapper>
        <WatchedSlider title="Continue Watching for You" data={cardData} />
      </HoriZontalWrapper>
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
  @media (max-width: 600px) {
    padding: 1rem;
    padding-bottom: 3rem;
  }
`;
const SubscribeWrapper = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  padding-right: 3rem;
  @media (max-width: 600px) {
    padding: 0;
    padding-bottom: 1.5rem;
    gap: 2rem;
  }
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
const SubscribeColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const RightContent = styled.div`
  display: flex;
  align-items: start;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
const SubscribeText = styled.button`
  display: flex;
  color: var(--text-color900);
  align-items: center;
  cursor: pointer;
  font-size: 20px;
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
const SideArrow = styled(ChevronRightIcon)`
  width: 30px;
  height: 25px;
  margin-left: 0.3rem;
  color: var(--text-color900);
  @media (max-width: 600px) {
    margin-left: 0rem;
  }
`;

const Settings = styled(SettingsOutlinedIcon)`
  width: 25px;
  height: 25px;
  margin-right: 0.3rem;
  color: var(--text-color900);
  @media (max-width: 600px) {
    margin-right: 0rem;
    width: 20px;
    height: 20px;
  }
`;
const Edit = styled(ModeOutlinedIcon)`
  width: 22px;
  height: 22px;
  margin-right: 0.3rem;
  color: var(--text-color900);
  @media (max-width: 600px) {
    width: 17px;
    height: 17px;
    margin-right: 0.1rem;
  }
`;

const SubscribeNumber = styled.p`
  color: var(--text-color900);
  margin-top: 0.5rem;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 14px;
    color: var(--tw-shadow);
    font-weight: 500;
  }
`;
const SubscribeButton = styled.button`
  background: var(--button-gradieent-color);
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--white_color);
  font-size: 20px;
  font-weight: 600;
  padding: 12px 64px;
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
const SettingButton = styled.button`
  background: var(--bg_color600);
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 2rem;
  color: var(--white_color);
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: var(--FONT-FAMILY);
  transition: all 0.3s ease-in-out;
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
  }
`;
const Plan = styled.p`
  margin-top: 4px;
  color: var(--text-color500);
  font-size: 14px;
  font-weight: 400;
  font-family: var(--FONT-FAMILY);
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  padding-right: 3rem;
  @media (max-width: 600px) {
    padding-right: 0rem;
  }
`;
const Header = styled.p`
  color: var(--text-color900);
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 17px;
    font-weight: 500;
  }
`;
const EditButton = styled.button`
  color: var(--text-color900);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
  }
`;
const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  @media (max-width: 600px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: flex-start;
  }
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  transition-duration: 0.1s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: 600px) {
    margin-right: 10px;
    width: 4rem;
    height: fit-content;
  }
`;
const ProfileContainer = styled.div`
  position: relative;
`;
const PlusContainer = styled.div`
  position: relative;
  background: var(--bg_color700);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`;
const Profile = styled(ImageView)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 2px solid var(--text-color900);
  @media (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`;
const Username = styled.p`
  color: var(--text-color400);
  font-weight: 500;
  font-size: 16px;
  margin-top: 0.5rem;
  font-family: var(--FONT-FAMILY);
`;
const SelectButton = styled.button`
  border-radius: 50%;
  position: absolute;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  right: 7px;
  bottom: 3px;
  background-color: var(--text-color900);
  @media (max-width: 600px) {
    display: none;
  }
`;
const Select = styled(DoneIcon)`
  width: 18px;
  height: 18px;
  color: var(--bg_color700);
`;
const Add = styled(AddRoundedIcon)`
  width: 50px;
  height: 60px;
  font-size: medium;
  color: var(--white_color);
`;
const HoriZontalWrapper = styled.div`
  margin-top: 3rem;
`;
