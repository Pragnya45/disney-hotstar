import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageView from "./Image";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { RiDownloadLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";

const disneyicon = "/assets/icons/disney.png";

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    <NavBase>
      <Button href="/" className={pathname === "/" ? "active" : ""}>
        <Home />
        <Homefilled />
        <NavText>Home</NavText>
      </Button>
      <Button
        href="/explore"
        className={pathname === "/explore" ? "active" : ""}
      >
        <Search />
        <NavText>Search</NavText>
      </Button>
      <Button href="/" className={pathname === "/new" ? "active" : ""}>
        <RxLightningBolt
          size={19}
          color={pathname === "/new" ? "#ffffff" : "hsla(0, 0%, 100%, 0.6)"}
        />
        <NavText>New & Hot</NavText>
      </Button>
      <Button
        href="/downloads"
        className={pathname === "/downloads" ? "active" : ""}
      >
        <RiDownloadLine
          size={19}
          color={
            pathname === "/downloads" ? "#ffffff" : "hsla(0, 0%, 100%, 0.6)"
          }
        />

        <NavText>Downloads</NavText>
      </Button>
      <Button
        href="/my-page"
        className={pathname === "/my-page" ? "active" : ""}
      >
        <Image src={disneyicon} alt="disney" width={20} height={20} />
        <NavText>My Space </NavText>
      </Button>
    </NavBase>
  );
}

const NavBase = styled.nav`
  display: none;
  width: 0;
  height: 0;
  transition: 0.5s ease-in-out all;
  z-index: 10;
  @media (max-width: 600px) {
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.5rem;
    background: var(--bg_color300);
    border-top: 1px solid var(--border-color1000);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Image = styled(ImageView)`
  object-fit: cover;
`;
const NavText = styled.p`
  color: var(--tw-shadow);
  font-family: var(--FONT-FAMILY);
  font-size: 12px;
  font-weight: 500;
`;
const Search = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Home = styled(HomeOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Homefilled = styled(HomeIcon)`
  display: none;
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Button = styled(Link)`
  outline: none;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  &.active {
    ${Search}, ${Homefilled} {
      display: block;
      filter: drop-shadow(0 0 15px var(--tw-shadow));
      color: var(--white_color);
      fill: var(--white_color);
      border-color: var(--white_color1000);
    }

    ${Home} {
      display: none;
      fill: var(--white_color);
      transform: scale(1.08);
    }
    ${NavText} {
      color: var(--white_color);
      border-color: var(--white_color1000);
      filter: drop-shadow(0 0 15px var(--tw-shadow));
      transform: scale(1.08);
    }
  }
`;
