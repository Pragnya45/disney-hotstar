import React from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import Footer from "@/app/Components/Footer";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCard";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ImageView from "@/app/Components/Image";
import DoneIcon from "@mui/icons-material/Done";
const star = "/assets/icons/stars.svg";
const disney = "/assets/icons/disney.png";
const kids = "/assets/icons/kids.png";
function MyPage() {
  const releases = [
    {
      title: "Taqdeer",
      img: "/assets/images/taqdeer.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/taqdeer-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/taqdeer-1.webp",
          video: "",
          year: "2024",
          seasons: "3",
          totalLanguage: "7",
          ua: "7+",
          description:
            "Setting his mighty foot on Lanka, Hanuman  unleashes himself against Ravan. Watch the  legendary hero and the demon king go head to  head in this ultimate war.",
        },
      ],
    },
    {
      title: "Echo",
      img: "/assets/images/ss-1.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/echo-title.webp",
          language: "English",
          coverpic: "/assets/images/ss.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "4",
          ua: "16+",
          description:
            "Pursued by Fisk’s criminal empire, Maya journeys home where she confronts her own family and legacy.",
        },
      ],
    },
  ];
  const cardData = [
    {
      title: "Pirates 34-31 Yoddhas",
      img: "/assets/images/pirates.webp",
      hovercardData: [
        {
          titleImg: "/assets/images/hanuman-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/hovercard-hanuman.webp",
          video: "",
          year: "2024",
          seasons: "3",
          totalLanguage: "7",
          ua: "7+",
          description:
            "Setting his mighty foot on Lanka, Hanuman  unleashes himself against Ravan. Watch the  legendary hero and the demon king go head to  head in this ultimate war.",
        },
      ],
    },
    // {
    //   title: "Echo",
    //   img: "/assets/images/echo-2.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/echo-title.webp",
    //       language: "English",
    //       coverpic: "/assets/images/echo.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "4",
    //       ua: "16+",
    //       description:
    //         "Pursued by Fisk’s criminal empire, Maya journeys home where she confronts her own family and legacy.",
    //     },
    //   ],
    // },
    // {
    //   title: "Periloor premium league",
    //   img: "/assets/images/telugu-2.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/telugu-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/telugu.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "7",
    //       ua: "13+",
    //       description:
    //         "Following her childhood crush, Malavika comes to the Perilloor village. Much to her dismay, the kooky natives force her to fight in the panchayat elections.",
    //     },
    //   ],
    // },
    // {
    //   title: "The Hanuman of Legend",
    //   img: "/assets/images/Luke.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/luke-title.webp",
    //       language: "English",
    //       coverpic: "/assets/images/luke-2.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "1",
    //       ua: "13+",
    //       description:
    //         "Luke Nguyen circumnavigates south India, discovering the sounds, colours & cuisines of the region. He meets local chefs, who introduce him to Indian cuisine.",
    //     },
    //   ],
    // },
    // {
    //   title: "NEVER SAY NEVER",
    //   img: "/assets/images/never.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/never-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/never-2.webp",
    //       video: "",
    //       year: "2021",
    //       seasons: "1",
    //       totalLanguage: "4",
    //       ua: "13+",
    //       description:
    //         "Travel writer Jeff Jenkins criss-crosses the globe in search of unique ways to push beyond his comfort zone.",
    //     },
    //   ],
    // },
    // {
    //   title: "The Mission",
    //   img: "/assets/images/misson.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/mission-title.webp",
    //       language: "English",
    //       coverpic: "/assets/images/mission-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "4",
    //       ua: "16+",
    //       description:
    //         "John Chau, an American missionary is killed as he attempts to contact an Indigenous group, living in complete isolation, off the coast of India.",
    //     },
    //   ],
    // },
    // {
    //   title: "Dance+",
    //   img: "/assets/images/dance+.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/dance-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/dance-2.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "6",
    //       totalLanguage: "1",
    //       ua: "16+",
    //       description:
    //         "The hunt for India’s new dancing superstar is on! With high-end tech and innovative dance acts, emerging talents bring their A-game to bag the coveted title.",
    //     },
    //   ],
    // },
    // {
    //   title: "Believe in Magic",
    //   img: "/assets/images/believe-in-magic-2.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/belive-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/believe-in-magic.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "1",
    //       ua: "5+",
    //       description:
    //         "They’re in it to win it! Alongside host Sahil Khattar, emerging cricket stars share their breakout stories whilst embracing the notion - ‘Believing Is Magic’.",
    //     },
    //   ],
    // },
    // {
    //   title: "The Freelancer",
    //   img: "/assets/images/freelancer.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/freelance-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/freelancer-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "7",
    //       ua: "16+",
    //       description:
    //         "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
    //     },
    //   ],
    // },
    // {
    //   title: "12th Fail",
    //   img: "/assets/images/12thfail.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/12thFail-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/12thFail-2.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "1",
    //       totalLanguage: "1",
    //       ua: "5+",
    //       description:
    //         "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
    //     },
    //   ],
    // },
    // {
    //   title: "Indian Cricket Show",
    //   img: "/assets/images/indian-cricket.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/indian-cricket-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/indian-cricket-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "2",
    //       totalLanguage: "2",
    //       ua: "7+",
    //       description:
    //         "Along with Gaurav Kapur, legends Yuvraj Singh and Gautam Gambhir weigh in on Team India’s chances in the upcoming T20 World Cup. Join in the engaging debate!",
    //     },
    //   ],
    // },
    // {
    //   title: "Parking",
    //   img: "/assets/images/parking.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/parking-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/parking-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "5",
    //       ua: "16+",
    //       description:
    //         "A clash over a shared space transforms two men from diverse backgrounds into aggressors. Will ego triumph, or can shared intentions lead to resolution?",
    //     },
    //   ],
    // },
    // {
    //   title: "The Great North",
    //   img: "/assets/images/greatNorth.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/greate-north-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/great-north-2.webp",
    //       video: "",
    //       year: "2024",
    //       seasons: "4",
    //       totalLanguage: "1",
    //       ua: "13+",
    //       description:
    //         "SHOW ON BREAK. Follow the Alaskan adventures of the Tobin family, a single dad Beef tries to keep his kids close.",
    //     },
    //   ],
    // },
    // {
    //   title: "Falimy",
    //   img: "/assets/images/falimy.jpg",
    //   hovercardData: [
    //     {
    //       titleImg: "/assets/images/falimy-title.webp",
    //       language: "Hindi",
    //       coverpic: "/assets/images/falimy-2.webp",
    //       video: "",
    //       year: "2023",
    //       seasons: "1",
    //       totalLanguage: "5",
    //       ua: "13+",
    //       description:
    //         "To fulfill the elderly patriarch's wish, a dissonant family embarks on a trip to Varanasi. Will this journey mend their bonds or deepen the fault lines?",
    //     },
    //   ],
    // },
  ];
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
        <RightContent>
          <SubscribeColumn>
            <SubscribeButton>Subscribe</SubscribeButton>
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
      <SliderComponent title="Watchlist" data={releases} />
      <HoriZontalWrapper>
        <HorizontalCard title="Continue Watching for You" data={cardData} />
      </HoriZontalWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
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
  padding-right: 3rem;
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
`;
const SideArrow = styled(ChevronRightIcon)`
  width: 30px;
  height: 25px;
  margin-left: 0.3rem;
  color: var(--text-color900);
`;

const Settings = styled(SettingsOutlinedIcon)`
  width: 25px;
  height: 25px;
  margin-right: 0.3rem;
  color: var(--text-color900);
`;
const Edit = styled(ModeOutlinedIcon)`
  width: 22px;
  height: 22px;
  margin-right: 0.3rem;
  color: var(--text-color900);
`;

const SubscribeNumber = styled.p`
  color: var(--text-color900);
  margin-top: 0.5rem;
  font-size: 18px;
  font-weight: 600;
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
`;
const Plan = styled.p`
  margin-top: 4px;
  color: var(--text-color500);
  font-size: 14px;
  font-weight: 400;
  font-family: var(--FONT-FAMILY);
`;
const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  padding-right: 3rem;
`;
const Header = styled.p`
  color: var(--text-color900);
  font-size: 20px;
  font-weight: 600;
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
`;
const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
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
`;
const Profile = styled(ImageView)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 2px solid var(--text-color900);
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
const FooterWrapper = styled.div`
  margin-right: 3rem;
`;
