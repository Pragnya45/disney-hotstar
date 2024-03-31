import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";
import ImageView from "@/app/Components/Image";

export default function Download() {
  return (
    <Wrapper>
      <Heading>Downloads</Heading>
      <DownloadWrapper>
        <FaDownload color="hsla(0, 0%, 100%, 0.6)" size={40} />
        <Heading>No Downloads Available</Heading>
        <Description>
          Explore and download your favourite movies and shows to watch on the
          go
        </Description>
        <HomeButton href="/">Go to Home</HomeButton>
      </DownloadWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
`;
const Heading = styled.p`
  color: var(--white_color1000);
  font-size: 18px;
  font-weight: 500;
`;
const Description = styled.p`
  color: var(--text-color1000);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  gap: 0.5rem;
`;
const HomeButton = styled(Link)`
  font-family: var(--FONT-FAMILY);
  background-color: var(--white_color);
  font-size: 13px;
  color: var(--black_color);
  font-weight: 500;
  width: 15rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  padding: 0.9rem 1.5rem !important;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  text-decoration: none;
`;
