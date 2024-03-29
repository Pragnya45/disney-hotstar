"use client";
import React from "react";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import HorizontalCard from "@/app/Components/HorizontalCardSlider";
import PosterCard from "@/app/Components/PosterCard";
import BannerMovie from "@/app/Components/BannerMovie";
import { cardData } from "../utils/data";

const cricket = "/assets/images/cricket.webp";
const kabaddi = "/assets/images/kabaddi.webp";
const football = "/assets/images/football.webp";
const kheloindia = "/assets/images/kheloindia.webp";
const mixedmartialarts = "/assets/images/mixedmartialarts.webp";
const americanfootball = "/assets/images/americanfootball.webp";
const tennis = "/assets/images/tennis.webp";
const hockey = "/assets/images/hockey.webp";
const baseball = "/assets/images/baseball.webp";

export default function Sport() {
  const iccMen = [
    {
      title: "Unstoppable India Steamroll Kiwis",
      img: "/assets/images/high(indVsnz).webp",
      description:
        "India remained unbeaten following another dominant 214-run win against New Zealand in the Super Six Stage of ICC Men's U-19 Cricket World Cup 2024",
    },
    {
      title: "Nervy Pak Survive Ire Challenge",
      img: "/assets/images/high(pakVsire).webp",
      description:
        "Pakistan managed to find their way against a tricky Ireland to clinch a three-wicket win in the Super Six stage of ICC Men's U-19 Cricket World Cup 2024",
    },
    {
      title: "Resolute WI Edge Past Fighting SL",
      img: "/assets/images/high(slVswi).webp",
      description:
        "A determined West Indies emerged victorious by three wickets in a close Super Six game against Sri Lanka in ICC Men's U-19 Cricket World Cup 2024",
    },
    {
      title: "Dashing Musheer Extends Purple Patch",
      img: "/assets/images/topknocks.webp",
      description:
        "Musheer Khan registered his second ton in the ICC Men's U-19 Cricket World Cup 2024 to boost India's total against New Zealand in the Super Six stage",
    },
    {
      title: "Accurate Pandey Dismantles NZ",
      img: "/assets/images/topsells.webp",
      description:
        "Saumya Pandey wrapped up New Zealand's innings early with his spectacular 4/19 in the Super Six stage of ICC Men's U-19 Cricket World Cup 2024",
    },
    {
      title: "IND vs NZ: NZ FOW",
      img: "/assets/images/fallofwickets.webp",
      description:
        "Watch all the dismissals from New Zealand's innings against India in ICC U-19 Men's Cricket World Cup 2024",
    },
    {
      title: "IND vs NZ: IND FOW",
      img: "/assets/images/fallofwickets(indFow).webp",
      description:
        "Watch all the dismissals from India's innings against New Zealand in ICC U-19 Men's Cricket World Cup 2024",
    },
    {
      title: "SL vs WI: WI FOW",
      img: "/assets/images/wiFow.webp",
      description:
        "Watch all the dismissals from West Indies' innings against Sri Lanka in ICC U-19 Men's Cricket World Cup 2024",
    },
    {
      title: "SL vs WI: SL FOW",
      img: "/assets/images/slFow.webp",
      description:
        "Watch all the dismissals from Sri Lanka's innings against West Indies in ICC U-19 Men's Cricket World Cup 2024",
    },
  ];
  const sports = [
    {
      id: 1,
      image: cricket,
    },
    {
      id: 2,
      image: kabaddi,
    },
    {
      id: 3,
      image: football,
    },
    {
      id: 4,
      image: kheloindia,
    },
    {
      id: 5,
      image: mixedmartialarts,
    },
    {
      id: 6,
      image: americanfootball,
    },
    {
      id: 7,
      image: tennis,
    },
    {
      id: 8,
      image: hockey,
    },
    {
      id: 9,
      image: baseball,
    },
  ];
  const tournaments = [
    {
      id: 1,
      image: "/assets/images/prokabaddi.webp",
    },
    {
      id: 2,
      image: "/assets/images/cricket(Ausvswi).webp",
    },
    {
      id: 3,
      image: "/assets/images/premierleague.webp",
    },
    {
      id: 4,
      image: "/assets/images/kfcBBL.webp",
    },
    {
      id: 5,
      image: "/assets/images/crcketSA.webp",
    },
    {
      id: 6,
      image: "/assets/images/cricketAusvsstar.webp",
    },
    {
      id: 7,
      image: "/assets/images/llc.webp",
    },
    {
      id: 8,
      image: "/assets/images/asiacup.webp",
    },
    {
      id: 9,
      image: "/assets/images/champions.webp",
    },
    {
      id: 10,
      image: "/assets/images/mfn.webp",
    },
  ];
  return (
    <Wrapper>
      <Contentwrapper>
        <Banner />
      </Contentwrapper>
      <BannerMovie />
      <ProductionWrapper>
        <PosterCard data={sports} title="Popular Sports" />
        <HorizontalCard title="Best in Sports" data={cardData} />
        <HorizontalCardWrapper>
          <HorizontalCard title="ICC Men's U-19 CWC" data={iccMen} />
        </HorizontalCardWrapper>
        <PosterCard data={tournaments} title="Popular Tournaments" />
      </ProductionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
const HorizontalCardWrapper = styled.div`
  padding-top: 3rem;
`;
