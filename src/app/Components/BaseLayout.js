"use client";
import { styled } from "styled-components";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

export default function BaseLayout({ children }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [showPageNav, setShowPageNav] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = currentScrollPos > 70;
      setShowPageNav(isVisible);
    };

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  useEffect(() => {
    if (pathname === "/movies") {
      setActivePath("Movies");
    } else if (pathname === "/tv") {
      setActivePath("Tv");
    } else if (pathname === "/sports") {
      setActivePath("Sports");
    } else if (pathname === "/categories") {
      setActivePath("More");
    }
  }, [pathname]);
  const navData = [
    {
      title: "Tv",
      path: "/tv",
    },
    {
      title: "Movie",
      path: "/movies",
    },
    {
      title: "Sports",
      path: "/sports",
    },
    {
      title: "More",
      path: "/categories",
    },
  ];

  const isWideScreen = screenWidth > 600;
  return (
    <Main>
      {children}

      {isWideScreen ? (
        <Footer />
      ) : (
        <>
          {showPageNav && (
            <PageNavWrapper>
              {pathname === "/" ? (
                <PageNav>
                  {navData?.map((nav, index) => (
                    <NavText
                      islast={index === navData.length - 1}
                      key={index}
                      href={nav.path}
                    >
                      {nav?.title}
                    </NavText>
                  ))}
                </PageNav>
              ) : pathname === "/movies" ||
                pathname === "/tv" ||
                pathname === "/sports" ||
                pathname === "/categories" ? (
                <ActiveNavWrapper>
                  <ActiveNav>{activePath}</ActiveNav>
                  <IconWrapper
                    onClick={() => {
                      router.push("/");
                      setActivePath("/");
                    }}
                  >
                    <IoCloseOutline size={20} color="#fff" />
                  </IconWrapper>
                </ActiveNavWrapper>
              ) : (
                "null"
              )}
            </PageNavWrapper>
          )}

          <MobileNavbar />
        </>
      )}
    </Main>
  );
}

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
  position: relative;
`;
const PageNav = styled.div`
  position: fixed;
  bottom: 5rem;
  border-radius: 20px;
  background: var(--bg_color700);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 20;
  box-shadow: var(--box-shadow900);
`;

const NavText = styled(Link)`
  color: var(--white_color);
  font-family: var(--FONT-FAMILY);
  font-size: 16px;
  font-weight: 500;
  padding: 0rem 0.5rem;
  border-right: 2px solid
    ${(props) => (props.islast ? "none" : "var(--white_color900)")};
  text-decoration: none;
`;
const ActiveNav = styled.p`
  color: var(--white_color);
  font-family: var(--FONT-FAMILY);
  font-size: 16px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: var(--bg_color700);
  border-radius: 20px;
`;

const PageNavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ActiveNavWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: fixed;
  bottom: 5rem;
  z-index: 20;
`;
const IconWrapper = styled.div`
  border-radius: 50%;
  padding: 0.3rem;
  background: var(--bg_color700);
  display: flex;
  align-items: center;
  justify-content: center;
`;
