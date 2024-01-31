"use client";
import React from "react";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCard";
import ProductionHouse from "@/app/Components/ProductionHouse";
import PosterCard from "@/app/Components/PosterCard";

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
  const releases = [
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
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
    {
      title: "Echo",
      img: "/assets/images/echo-2.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/echo-title.webp",
          language: "English",
          coverpic: "/assets/images/echo.webp",
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
    {
      title: "Periloor premium league",
      img: "/assets/images/telugu-2.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/telugu-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/telugu.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "7",
          ua: "13+",
          description:
            "Following her childhood crush, Malavika comes to the Perilloor village. Much to her dismay, the kooky natives force her to fight in the panchayat elections.",
        },
      ],
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/Luke.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/luke-title.webp",
          language: "English",
          coverpic: "/assets/images/luke-2.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "1",
          ua: "13+",
          description:
            "Luke Nguyen circumnavigates south India, discovering the sounds, colours & cuisines of the region. He meets local chefs, who introduce him to Indian cuisine.",
        },
      ],
    },
    {
      title: "NEVER SAY NEVER",
      img: "/assets/images/never.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/never-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/never-2.webp",
          video: "",
          year: "2021",
          seasons: "1",
          totalLanguage: "4",
          ua: "13+",
          description:
            "Travel writer Jeff Jenkins criss-crosses the globe in search of unique ways to push beyond his comfort zone.",
        },
      ],
    },
    {
      title: "The Mission",
      img: "/assets/images/misson.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/mission-title.webp",
          language: "English",
          coverpic: "/assets/images/mission-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "4",
          ua: "16+",
          description:
            "John Chau, an American missionary is killed as he attempts to contact an Indigenous group, living in complete isolation, off the coast of India.",
        },
      ],
    },
    {
      title: "Dance+",
      img: "/assets/images/dance+.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/dance-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/dance-2.webp",
          video: "",
          year: "2024",
          seasons: "6",
          totalLanguage: "1",
          ua: "16+",
          description:
            "The hunt for India’s new dancing superstar is on! With high-end tech and innovative dance acts, emerging talents bring their A-game to bag the coveted title.",
        },
      ],
    },
    {
      title: "Believe in Magic",
      img: "/assets/images/believe-in-magic-2.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/belive-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/believe-in-magic.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "1",
          ua: "5+",
          description:
            "They’re in it to win it! Alongside host Sahil Khattar, emerging cricket stars share their breakout stories whilst embracing the notion - ‘Believing Is Magic’.",
        },
      ],
    },
    {
      title: "The Freelancer",
      img: "/assets/images/freelancer.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/freelance-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/freelancer-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "7",
          ua: "16+",
          description:
            "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
        },
      ],
    },
    {
      title: "12th Fail",
      img: "/assets/images/12thfail.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/12thFail-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/12thFail-2.webp",
          video: "",
          year: "2024",
          seasons: "1",
          totalLanguage: "1",
          ua: "5+",
          description:
            "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
        },
      ],
    },
    {
      title: "Indian Cricket Show",
      img: "/assets/images/indian-cricket.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/indian-cricket-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/indian-cricket-2.webp",
          video: "",
          year: "2023",
          seasons: "2",
          totalLanguage: "2",
          ua: "7+",
          description:
            "Along with Gaurav Kapur, legends Yuvraj Singh and Gautam Gambhir weigh in on Team India’s chances in the upcoming T20 World Cup. Join in the engaging debate!",
        },
      ],
    },
    {
      title: "Parking",
      img: "/assets/images/parking.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/parking-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/parking-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "5",
          ua: "16+",
          description:
            "A clash over a shared space transforms two men from diverse backgrounds into aggressors. Will ego triumph, or can shared intentions lead to resolution?",
        },
      ],
    },
    {
      title: "The Great North",
      img: "/assets/images/greatNorth.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/greate-north-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/great-north-2.webp",
          video: "",
          year: "2024",
          seasons: "4",
          totalLanguage: "1",
          ua: "13+",
          description:
            "SHOW ON BREAK. Follow the Alaskan adventures of the Tobin family, a single dad Beef tries to keep his kids close.",
        },
      ],
    },
    {
      title: "Falimy",
      img: "/assets/images/falimy.jpg",
      hovercardData: [
        {
          titleImg: "/assets/images/falimy-title.webp",
          language: "Hindi",
          coverpic: "/assets/images/falimy-2.webp",
          video: "",
          year: "2023",
          seasons: "1",
          totalLanguage: "5",
          ua: "13+",
          description:
            "To fulfill the elderly patriarch's wish, a dissonant family embarks on a trip to Varanasi. Will this journey mend their bonds or deepen the fault lines?",
        },
      ],
    },
  ];
  const cardData = [
    {
      title: "Bazball Blemishes India's 100% Record",
      img: "/assets/images/bazball.webp",
      description:
        "Check out the best stats from Day 4 of the first Test between India and England",
    },
    {
      title: "Defiant Pope Blunts India's Spin Trio",
      img: "/assets/images/defiant.webp",
      description:
        "Check out the best stats from Day 3 of the first Test between India and England",
    },
    {
      title: "Rahul Shines in Milestone 50th Test",
      img: "/assets/images/rahul_shines.webp",
      description:
        "Check out the best stats from Day 2 of the first Test between India and England",
    },
    {
      title: "Ashwin Enters an Elite WTC List",
      img: "/assets/images/aswinenters.webp",
      description:
        "Check out the best stats from Day 1 of the first Test between India and England",
    },
  ];
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
      <ProductionWrapper>
        <PosterCard data={sports} title="Popular Sports" />
      </ProductionWrapper>
      <HorizontalCard title="Best in Sports" data={cardData} />
      <HorizontalCardWrapper>
        <HorizontalCard title="ICC Men's U-19 CWC" data={iccMen} />
      </HorizontalCardWrapper>
      <ProductionWrapper>
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
`;
const HorizontalCardWrapper = styled.div`
  padding-top: 3rem;
`;
