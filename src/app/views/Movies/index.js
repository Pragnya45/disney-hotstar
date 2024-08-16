import React from "react";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import BannerMovie from "@/app/Components/BannerMovie";
//import { releases } from "../utils/data";
import Progress from "@/app/Components/Progress";
import useQueryApi from "@/app/Hooks/useQueryApi";
import { urlObj } from "@/app/utils/url";

function MoviePage() {
  const { data: videoData, refetch } = useQueryApi({
    url: `${urlObj.video}?category=Horror Movies`,
    queryKey: `Horror Movies`,
  });
  console.log(videoData);
  return (
    <Wrapper>
      {videoData?.response && videoData?.response?.length ? (
        <>
          <Contentwrapper>
            <Banner />
          </Contentwrapper>
          <BannerMovie releases={videoData?.response} />
          <ProductionWrapper>
            <SliderComponent title="Drama Movies" />
            <SliderComponent title="Romance Movies" />
            <SliderComponent title="Popular Movies" />
            <SliderComponent title="Comedy Movies" />
            <SliderComponent title="Thriller Movies" />
            <SliderComponent title="Horror Movies" />
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

export default MoviePage;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  @media (max-width: 600px) {
    padding: 1rem;
    margin: 0;
  }
`;
const ProductionWrapper = styled.div`
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 1rem;
    padding-bottom: 2rem;
  }
`;
