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
      img: "/assets/images/echo-2.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/greatNorth.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/Luke.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/vaccinewar.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/misson.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/dance+.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/believe-in-magic-2.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/freelancer.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/12thfail.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/indian-cricket.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/parking.jpg",
    },
    {
      title: "The Hanuman of Legend",
      img: "/assets/images/telugu-2.jpg",
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
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
  &:hover {
    .slick-next {
      opacity: 1;
    }
  }
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
  .slick-disabled {
    opacity: 0;
    pointer-events: none;
  }
  .slick-track {
    display: flex;
  }
  .slick-active {
    /* width: 205px !important; */
    outline: none !important;
    border: none !important;
  }
  .slick-slide:active {
    outline: none !important;
    border: none !important;
  }
  .slick-slide {
    outline: none !important;
    border: none !important;
  }

  .slick-list {
    overflow: hidden;
  }
  .slick-prev {
    padding: 0.1rem;
    width: 3rem;
    background: var(--bg_color-prev-gradient);
    z-index: 5;
    position: absolute;
    height: 100%;
  }
  .slick-next {
    right: 0;
    top: 0;
    padding: 0.1rem;
    background: var(--bg_color-next-gradient);
    width: 3rem;
    z-index: 5;
    height: 100%;
    opacity: 0;
    position: absolute;
  }
`;
