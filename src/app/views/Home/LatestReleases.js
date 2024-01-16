import React from "react";
import styled from "styled-components";
import ImageView from "../../Components/Image";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function LatestReleases() {
  const releases = [
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/hanuman.jpg",
    },
  ];
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
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [],
  };
  return (
    <Wrapper>
      <Heading>Latest Releases</Heading>
      <CardWrapper>
        <StyledSlider {...settings}>
          {releases.map((release, index) => (
            <Card key={index}>
              <CardImage
                src={release.img}
                alt={release.title}
                width={100}
                height={100}
              />
            </Card>
          ))}
        </StyledSlider>
      </CardWrapper>
    </Wrapper>
  );
}

export default LatestReleases;

const Wrapper = styled.div`
  display: flex;
  margin-left: 6rem;
  flex-direction: column;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color900);
`;
const CardWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 1rem;
`;
const Card = styled.div`
  position: relative;
  width: 12rem !important;
  height: 16rem !important;
`;
const CardImage = styled(ImageView)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
const ArrowLeftIcon = styled(ChevronLeftIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
`;

const ArrowRightIcon = styled(ChevronRightIcon)`
  transition: all ease-in-out 0.5s;
  color: var(--text-color900);
`;
const StyledSlider = styled(Slider)`
  width: 98%;
  position: relative;
  .slick-track {
    display: flex;
  }
  .slick-active {
    width: 205px !important;
  }

  .slick-list {
    overflow: hidden;
  }
  .slick-prev {
    padding: 0.1rem;
    width: 3rem;
    background: var(--bg_color-prev-gradient);
    z-index: 35;
    position: absolute;
    height: 100%;
  }
  .slick-next {
    right: 0;
    top: 0;
    padding: 0.1rem;
    background: var(--bg_color-next-gradient);
    width: 3rem;
    z-index: 35;
    height: 100%;

    position: absolute;
  }
`;
