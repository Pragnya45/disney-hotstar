import React from "react";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCard";
import PosterCard from "@/app/Components/PosterCard";

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
  gap: 3rem;
`;
