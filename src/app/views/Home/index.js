"use client";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import ProductionHouse from "@/app/Components/ProductionHouse";
import BannerMovie from "@/app/Components/BannerMovie";
import WatchedSlider from "@/app/Components/WatchedSlider";
import { releases, cardData } from "@/app/views/utils/data";
import { useSelector } from "react-redux";
import useApi from "@/app/Hooks/useApi";
import { profileState } from "@/app/Redux/profileSlice";
import { urlObj } from "@/app/utils/url";
import { useState, useEffect } from "react";
import Progress from "@/app/Components/Progress";
import CardSkeleton from "@/app/Components/CardSkeleton";
import useQueryApi from "@/app/Hooks/useQueryApi";

function Home() {
  const { token, email } = useSelector(profileState);
  const [apiFn, loading] = useApi();
  const [watchList, setWatchList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      console.log("called");
      const { response, error } = await apiFn({
        url: `${urlObj.user}/watch-history`,
        options: {
          method: "POST",
          body: {
            email: email,
          },
        },
      });
      console.log(response);
      setWatchList(response?.results);
    };
    if (token) {
      fetchdata();
    }
  }, [token]);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const isWideScreen = screenWidth > 600;
  const { data: videoData, refetch } = useQueryApi({
    url: `${urlObj.video}?category=Coming Soon`,
    queryKey: `Coming Soon`,
  });
  useEffect(() => {
    refetch();
  }, [!videoData?.response]);
  return (
    <Wrapper>
      {videoData?.response && videoData?.response?.length ? (
        <>
          <Contentwrapper>
            <Banner />
          </Contentwrapper>
          <BannerMovie releases={videoData?.response} />
          <ProductionWrapper>
            <>
              {!loading ? (
                watchList &&
                watchList?.length && (
                  <WatchedSlider
                    title="Continue Watching for You"
                    data={watchList}
                    watchHistory={true}
                  />
                )
              ) : (
                <CardWrapper>
                  <CardSkeleton cards={isWideScreen ? 6 : 3} />
                </CardWrapper>
              )}
              <SliderComponent
                title="Latest Releases"
                data={releases}
                isSpan={false}
              />
              <HorizontalCard title="Best in Sports" data={cardData} />
              <SliderComponent
                title="Newly Added"
                data={releases}
                isSpan={true}
              />
              <SliderComponent
                title="Popular Shows"
                data={releases}
                isSpan={false}
              />
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
              <SliderComponent
                title="Coming Soon"
                data={releases}
                isSpan={false}
              />
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
            </>
            {/* )} */}
          </ProductionWrapper>
        </>
      ) : (
        <ProgressWrapper>
          <Progress />
        </ProgressWrapper>
      )}
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
const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
const ProgressWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
