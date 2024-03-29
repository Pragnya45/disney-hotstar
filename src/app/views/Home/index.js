import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import ProductionHouse from "@/app/Components/ProductionHouse";
import BannerMovie from "@/app/Components/BannerMovie";
import WatchedSlider from "@/app/Components/WatchedSlider";
import { releases, cardData } from "@/app/views/utils/data";

function Home() {
  return (
    <Wrapper>
      <Contentwrapper>
        <Banner />
      </Contentwrapper>
      <BannerMovie />
      <ProductionWrapper>
        <WatchedSlider title="Continue Watching for You" data={cardData} />
        <SliderComponent
          title="Latest Releases"
          data={releases}
          isSpan={false}
        />
        <HorizontalCard title="Best in Sports" data={cardData} />
        <SliderComponent title="Newly Added" data={releases} isSpan={true} />
        <SliderComponent title="Popular Shows" data={releases} isSpan={false} />
        {/* <top10></top10> */}
        <SliderComponent
          title="Watch With Your Family"
          data={releases}
          isSpan={false}
        />
        <SliderComponent
          title="Movies from the 2010s"
          data={releases}
          isSpan={false}
        />
        <HorizontalCard title="Param Bhakt Hanuman's Journey" data={cardData} />
        {/* <watchlist></watchlist> */}
        <SliderComponent
          title="Popular Movies"
          data={releases}
          isSpan={false}
        />
        <SliderComponent
          title="Hotstar Specials"
          data={releases}
          isSpan={false}
        />
        <SliderComponent title="Coming Soon" data={releases} isSpan={false} />
        <SliderComponent
          title="Best of Superheros"
          data={releases}
          isSpan={false}
        />
        <SliderComponent
          title="Exclusive Indian Movies"
          data={releases}
          isSpan={false}
        />

        <ProductionHouse />
      </ProductionWrapper>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;
const Contentwrapper = styled.div`
  padding-right: 6rem;
  padding-left: 6rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
const ProductionWrapper = styled.div`
  display: flex;
  padding-left: 6rem;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 0rem 1rem;
    gap: 0.5rem;
  }
`;
