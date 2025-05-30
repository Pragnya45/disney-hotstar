import React from "react";
import styled from "styled-components";
import ImageView from "./Image";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Video from "./Video";

function PosterCard({ title, data }) {
  function PrevArrow(props) {
    const { className, onClick } = props;

    return <ArrowLeftIcon className={className} onClick={onClick} />;
  }

  function NextArrow(props) {
    const { className, onClick } = props;

    return <ArrowRightIcon className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          speed: 700,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 700,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 700,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading>{title}</Heading>

        <ViewButton>
          View all
          <SideArrow />
        </ViewButton>
      </HeaderWrapper>

      <ProductionHouseWrapper {...settings}>
        {data.map((item, index) => (
          <ImageWrapper key={index}>
            <ProductionHouseImg
              src={item.image}
              width={200}
              height={100}
              alt="production"
            />
          </ImageWrapper>
        ))}
      </ProductionHouseWrapper>
    </Wrapper>
  );
}

export default PosterCard;
const SideArrow = styled(ChevronRightIcon)`
  width: 25px;
  height: 22px;
  color: var(--text-color1000);
`;
const ViewButton = styled.button`
  display: flex;
  font-size: 17px;
  font-weight: 700;
  color: var(--text-color1000);
  margin-left: 0.5rem;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
  padding-right: 1rem;
  &:hover {
    color: var(--white_color);
    ${SideArrow} {
      color: var(--white_color);
    }
  }
  @media (max-width: 600px) {
    font-size: 0px;
    &:hover {
    }
  }
`;
const ProductionHouseWrapper = styled(Slider)`
  margin-top: 1rem;
  display: flex !important;
  gap: 0.5rem;
  position: relative;
  align-items: center;
  display: flex;
  .slick-slide {
    display: flex;
  }
  .slick-track {
    display: flex;
    gap: 0.5rem;
    @media (max-width: 600px) {
      gap: 0.3rem;
    }
  }
  .slick-disabled {
    opacity: 0;
    pointer-events: none;
  }
  .slick-list {
    display: flex;
    width: 100% !important;
  }
  .slick-active {
    width: 250px !important;
    height: 130px !important;
    @media (max-width: 600px) {
      width: 130px !important;
      height: 80px !important;
      border-radius: 6px;
    }
  }
  .slick-prev {
    padding: 0.1rem;
    width: 3rem;
    background: var(--bg_color-prev-gradient);
    z-index: 1;
    position: absolute;
    height: 100%;
    cursor: pointer;
    @media (max-width: 600px) {
      display: none;
    }
  }
  .slick-next {
    right: 0;
    top: 0;
    padding: 0.1rem;
    background: var(--bg_color-next-gradient);
    width: 3rem;
    height: 100%;
    opacity: 0;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    @media (max-width: 600px) {
      display: none;
    }
    @media (max-width: 600px) {
      margin-top: 0rem;
      gap: 0.3rem;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 11.5rem;
  &:hover {
    .slick-next {
      opacity: 1;
    }
    ${ViewButton} {
      display: flex;
    }
  }
  @media (max-width: 600px) {
    height: 8.5rem;
    &:hover {
      ${ViewButton} {
        display: flex;
      }
    }
  }
`;

const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ArrowLeftIcon = styled(ChevronLeftIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
`;

const ArrowRightIcon = styled(ChevronRightIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
`;

const ProductionHouseImg = styled(ImageView)`
  position: absolute;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    object-fit: contain;
    border-radius: 8px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 250px !important;
  height: 130px !important;
  border-radius: 4px;
  transition: transform 0.3s ease-in 0.3s, z-index 0.3s ease-in 0.3s;
  z-index: 0;

  &:hover {
    transform: scale(1.15);
    z-index: 2;
  }
  @media (max-width: 600px) {
    width: 130px !important;
    height: 80px !important;
    border-radius: 6px;
    &:hover {
      transform: none;
      z-index: 2;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
