import React from "react";
import ImageView from "./Image";
import styled, { keyframes } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Link from "next/link";
import { usePathname } from "next/navigation";
const disneyicon = "/assets/icons/disney.png";
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <SidebarWrapper>
      <Button
        href="/my-page"
        className={pathname === "/my-page" ? "active" : ""}
      >
        <Image src={disneyicon} alt="disney" width={20} height={20} />
        <NavText>My Space </NavText>
      </Button>
      <Button
        href="/explore"
        className={pathname === "/explore" ? "active" : ""}
      >
        <Search />
        <NavText>Search</NavText>
      </Button>
      <Button href="/" className={pathname === "/" ? "active" : ""}>
        <Home />
        <Homefilled />
        <NavText>Home</NavText>
      </Button>
      <Button href="/tv" className={pathname === "/tv" ? "active" : ""}>
        <Tv />
        <Tvfilled />
        <NavText>Tv</NavText>
      </Button>
      <Button href="/movies" className={pathname === "/movies" ? "active" : ""}>
        <Movie />
        <Moviefilled />
        <NavText>Movies</NavText>
      </Button>
      <Button href="/sports" className={pathname === "/sports" ? "active" : ""}>
        <Sports />
        <Sportsfilled />
        <NavText>Sports</NavText>
      </Button>
      <Button
        href="/categories"
        className={pathname === "/categories" ? "active" : ""}
      >
        <Category />
        <Categoryfilled />
        <NavText>Categories</NavText>
      </Button>
    </SidebarWrapper>
  );
}

const NavText = styled.p`
  color: var(--tw-shadow);
  font-family: var(--FONT-FAMILY);
  font-size: 18px;
  display: none;
  font-weight: 700;
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
const Tv = styled(TvOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Tvfilled = styled(DesktopWindowsIcon)`
  display: none;
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Movie = styled(MovieOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Moviefilled = styled(MovieIcon)`
  display: none;
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Sports = styled(SportsBaseballOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Sportsfilled = styled(SportsBaseballIcon)`
  display: none;
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Category = styled(WidgetsOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;
const Categoryfilled = styled(WidgetsIcon)`
  display: none;
  width: 20px;
  height: 20px;
  color: var(--tw-shadow);
`;

const SidebarWrapper = styled.div`
  padding-top: 10rem;
  margin: auto;
  display: flex;
  background: none;
  flex-direction: column;
  gap: 2.5rem;
  cursor: pointer;
  position: absolute;

  &:hover {
    ${NavText} {
      display: block;
    }
  }
`;
const Image = styled(ImageView)``;

const Button = styled(Link)`
  margin-left: 32px;
  margin-right: 32px;
  outline: none;
  background: none;
  border: none;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
  animation: animationStart 0.2s ease-out, animationEnd 0.2s ease 0.1s;
  transition-duration: 0.15s;
  transition-property: transform;
  transform-origin: left;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @keyframes animationStart {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3);
    }
  }

  @keyframes animationEnd {
    0% {
      transform: scale(0.98);
    }
    60% {
      transform: scale(1.005);
    }
    100% {
      transform: scale(1.1);
    }
  }
  &:hover {
    margin-left: 37px;
    transition: 0.3s ease-in-out;
    ${Home},${Tv},${Movie},${Sports},${Category} {
      display: none;
      color: var(--white_color);
      box-shadow: var(--box-shadow1000);
      fill: var(--white_color);
      border-color: var(--white_color1000);
      border: 0 solid;
    }
    ${Search} {
      color: var(--white_color);
      fill: var(--white_color);
      border-color: var(--white_color1000);
      transform: scale(1.08);
    }
    ${Homefilled},${Tvfilled},${Moviefilled},${Sportsfilled},${Categoryfilled} {
      display: block;
      color: var(--white_color);
      fill: var(--white_color);
      width: 22px;
      height: 22px;
      border-color: var(--white_color1000);
      transform: scale(1.08);
    }
    ${NavText} {
      color: var(--white_color);
      font-size: 20px;
      border-color: var(--white_color1000);
      transform: scale(1.08);
    }
  }
  &.active {
    ${Search}, ${Homefilled},${Tvfilled},${Moviefilled},${Sportsfilled},${Categoryfilled} {
      display: block;
      filter: drop-shadow(0 0 15px var(--tw-shadow));
      color: var(--white_color);
      fill: var(--white_color);
      border-color: var(--white_color1000);
      transform: scale(1.08);
    }
    ${Image} {
      filter: drop-shadow(0 0 15px var(--tw-shadow));
      transform: scale(1.08);
    }
    ${Home},${Tv},${Movie},${Sports},${Category} {
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
