"use client";
import { styled } from "styled-components";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";

export default function BaseLayout({ children }) {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isWideScreen = screenWidth > 600;
  return (
    <Main>
      {children}
      {isWideScreen && (
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      )}
      <MobileNavbar />
    </Main>
  );
}

BaseLayout;
const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
`;

const FooterWrapper = styled.div`
  padding-left: 6rem;
  padding-right: 3rem;
`;
