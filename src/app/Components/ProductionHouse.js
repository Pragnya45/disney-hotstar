import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
import Video from "./Video";

const disney = "/assets/icons/disney-icon.webp";
const marvel = "/assets/icons/marvel.webp";
const nationalG = "/assets/icons/nationalG.webp";
const pixar = "/assets/icons/pixar.webp";
const starwar = "/assets/icons/starwars.webp";
const hotstarSpecials = "/assets/icons/hotstar-specials.webp";

const disneyVd = "/assets/videos/disney.mp4";
const marvelVd = "/assets/videos/marvel.mp4";
const nationalGVd = "/assets/videos/national-geographic.mp4";
const pixarVd = "/assets/videos/pixar.mp4";
const starwarVd = "/assets/videos/starwars.mp4";
const hotstrarspecialVd = "/assets/videos/hotstar-specials.mp4";
function ProductionHouse() {
  const productionHouse_list = [
    {
      id: 1,
      image: disney,
      video: disneyVd,
    },
    {
      id: 2,
      image: pixar,
      video: pixarVd,
    },
    {
      id: 3,
      image: marvel,
      video: marvelVd,
    },
    {
      id: 4,
      image: starwar,
      video: starwarVd,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGVd,
    },
    {
      id: 6,
      image: hotstarSpecials,
      video: hotstrarspecialVd,
    },
  ];

  return (
    <ProductionHouseWrapper>
      {productionHouse_list.map((item, index) => (
        <ImageWrapper key={index}>
          <ProductionHouseImg
            src={item.image}
            width={200}
            height={100}
            alt="production"
          />
          <Player src={item.video} />
        </ImageWrapper>
      ))}
    </ProductionHouseWrapper>
  );
}

export default ProductionHouse;
const Player = styled(Video)`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease-in 0.3s;
  border-radius: 4px;
`;
const ProductionHouseImg = styled(ImageView)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 4px;
`;
const ProductionHouseWrapper = styled.div`
  display: flex !important;
  flex-direction: row !important;
  gap: 0.5rem;
  width: 100%;
  padding-right: 2rem;
  position: relative;
  justify-content: start;
  align-items: center;
`;
const ImageWrapper = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 220px;
  height: 110px;
  border-radius: 4px;
  transition: transform 0.3s ease-in 0.3s, z-index 0.3s ease-in 0.3s;
  z-index: 0;

  &:hover {
    transform: scale(1.15);

    z-index: 2;

    ${Player} {
      opacity: 1;
    }
  }
`;
