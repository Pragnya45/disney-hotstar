import React from "react";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import BannerMovie from "@/app/Components/BannerMovie";
import { releases } from "../utils/data";

function MoviePage() {
  return (
    <Wrapper>
      <Contentwrapper>
        <Banner />
      </Contentwrapper>
      <BannerMovie />
      <ProductionWrapper>
        <SliderComponent title="Drama Movies" data={releases} />
        <SliderComponent title="Romance Movies" data={releases} />
        <SliderComponent title="Popular Movies" data={releases} />
        <SliderComponent title="Comedy Movies" data={releases} />
        <SliderComponent title="Thriller Movies" data={releases} />
        <SliderComponent title="Horror Movies" data={releases} />
      </ProductionWrapper>
    </Wrapper>
  );
}

export default MoviePage;

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
