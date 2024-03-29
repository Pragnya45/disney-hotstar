import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import PosterCard from "@/app/Components/PosterCard";
import BannerMovie from "@/app/Components/BannerMovie";
import { releases, cardData } from "../utils/data";

const starPlus = "/assets/images/star-plus.webp";
const starTelugu = "/assets/images/star-telugu.webp";
const starTamil = "/assets/images/star-tamil.webp";
const starBangal = "/assets/images/star-bangal.webp";
const starPrabah = "/assets/images/star-prabah.webp";
const starBharat = "/assets/images/star-bharat.webp";
const hotstarSpecial = "/assets/images/hostar-special.webp";
const asiaNet = "/assets/images/asiaNet.webp";
const starWorld = "/assets/images/star-world.webp";
const starUtsav = "/assets/images/star-utsav.webp";
function TvPage() {
  const channels = [
    {
      id: 1,
      image: starPlus,
    },
    {
      id: 2,
      image: starTelugu,
    },
    {
      id: 3,
      image: starTamil,
    },
    {
      id: 4,
      image: starBangal,
    },
    {
      id: 5,
      image: starPrabah,
    },
    {
      id: 6,
      image: starBharat,
    },
    {
      id: 7,
      image: hotstarSpecial,
    },
    {
      id: 8,
      image: asiaNet,
    },
    {
      id: 9,
      image: starWorld,
    },
    {
      id: 10,
      image: starUtsav,
    },
    {
      id: 11,
      image: starUtsav,
    },
  ];
  return (
    <Wrapper>
      <Contentwrapper>
        <Banner />
      </Contentwrapper>
      <BannerMovie />
      <ProductionWrapper>
        <SliderComponent title="StarPLus Shows" data={releases} />
        <HorizontalCard title="Thriller Shows" data={cardData} />
        <SliderComponent title="Comedy Shows" data={releases} />
        <SliderComponent title="Popular Shows" data={releases} />
        <PosterCard data={channels} title="Popular Channels" />
        <SliderComponent title="Kids Shows" data={releases} />
        <SliderComponent title="Action Shows" data={releases} />
        <SliderComponent title="Channel V Shows" data={releases} />
        <SliderComponent title="Hotstar Specials" data={releases} />
        <SliderComponent title="Star Utsav Shows" data={releases} />
        <SliderComponent title="Quix Shows" data={releases} />
        <SliderComponent title="Star Shows" data={releases} />
      </ProductionWrapper>
    </Wrapper>
  );
}

export default TvPage;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Contentwrapper = styled.div`
  padding-right: 6rem;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
`;
const ProductionWrapper = styled.div`
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
`;
