import React from "react";
import styled from "styled-components";
import Banner from "@/app/Components/Banner";
import SliderComponent from "@/app/Components/SliderComponent";
import HorizontalCard from "@/app/Components/HorizontalCard";
import ProductionHouse from "@/app/Components/ProductionHouse";

function Home() {
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
  return (
    <Wrapper>
      <Contentwrapper>
        <Banner />
      </Contentwrapper>
      <ProductionWrapper>
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
