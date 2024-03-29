import React from "react";
import ProductionHouse from "@/app/Components/ProductionHouse";
import PosterCard from "@/app/Components/PosterCard";
import styled from "styled-components";

const hindi = "/assets/images/hindi.webp";
const english = "/assets/images/english.webp";
const tamil = "/assets/images/tamil.webp";
const telugu = "/assets/images/telugu-2.webp";
const malayalam = "/assets/images/malayalam.webp";
const bengali = "/assets/images/bengali.webp";
const marathi = "/assets/images/marathi.webp";
const kannada = "/assets/images/kannada.webp";
const odia = "/assets/images/odia.webp";
const japanese = "/assets/images/japanese.webp";
const korean = "/assets/images/korean.webp";

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

const cricket = "/assets/images/cricket.webp";
const kabaddi = "/assets/images/kabaddi.webp";
const football = "/assets/images/football.webp";
const kheloindia = "/assets/images/kheloindia.webp";
const mixedmartialarts = "/assets/images/mixedmartialarts.webp";
const americanfootball = "/assets/images/americanfootball.webp";
const tennis = "/assets/images/tennis.webp";
const hockey = "/assets/images/hockey.webp";
const baseball = "/assets/images/baseball.webp";

const romance = "/assets/images/romance.webp";
const drama = "/assets/images/drama.webp";
const family = "/assets/images/family.webp";
const reality = "/assets/images/reality.webp";
const comedy = "/assets/images/comedy.webp";
const mythology = "/assets/images/Mythology.webp";
const crime = "/assets/images/crime.webp";
const food = "/assets/images/food.webp";
const action = "/assets/images/action.webp";
const talkShow = "/assets/images/TalkShow.webp";
const lifeStyle = "/assets/images/lifeStyle.webp";
const teen = "/assets/images/teen.webp";
const awards = "/assets/images/awards.webp";
const biopic = "/assets/images/biopic.webp";
const science = "/assets/images/sceince&technology.webp";
const travel = "/assets/images/travel.webp";
const horror = "/assets/images/Horror.webp";
const thriller = "/assets/images/thriller.webp";
const sports = "/assets/images/sports.webp";

function Category() {
  const language = [
    {
      id: 1,
      image: hindi,
    },
    {
      id: 2,
      image: english,
    },
    {
      id: 3,
      image: tamil,
    },
    {
      id: 4,
      image: telugu,
    },
    {
      id: 5,
      image: malayalam,
    },
    {
      id: 6,
      image: bengali,
    },
    {
      id: 7,
      image: marathi,
    },
    {
      id: 8,
      image: kannada,
    },
    {
      id: 9,
      image: odia,
    },
    {
      id: 10,
      image: japanese,
    },
    {
      id: 11,
      image: korean,
    },
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

  const genrs = [
    {
      id: 1,
      image: romance,
    },
    {
      id: 2,
      image: drama,
    },
    {
      id: 3,
      image: family,
    },
    {
      id: 4,
      image: reality,
    },
    {
      id: 5,
      image: comedy,
    },
    {
      id: 6,
      image: mythology,
    },
    {
      id: 7,
      image: crime,
    },
    {
      id: 8,
      image: food,
    },
    {
      id: 9,
      image: action,
    },
    {
      id: 10,
      image: talkShow,
    },
    {
      id: 11,
      image: lifeStyle,
    },
    {
      id: 12,
      image: teen,
    },
    {
      id: 13,
      image: awards,
    },
    {
      id: 14,
      image: biopic,
    },
    {
      id: 15,
      image: science,
    },
    {
      id: 16,
      image: travel,
    },
    {
      id: 17,
      image: horror,
    },
    {
      id: 18,
      image: thriller,
    },
    {
      id: 19,
      image: sports,
    },
  ];
  return (
    <Content>
      <ProductionHouse />
      <PosterCard data={language} title="Popular Languages" />
      <PosterCard data={channels} title="Popular Channels" />
      <PosterCard data={genrs} title="Popular Geners" />
      <PosterCard data={sports} title="Popular Sports" />
    </Content>
  );
}

export default Category;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  padding-top: 3rem;
  gap: 2rem;
`;
