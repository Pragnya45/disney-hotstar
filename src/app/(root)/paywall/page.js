"use client";
import React from "react";
import styled from "styled-components";
import Footer from "@/app/Components/Footer";
import Subscribe from "@/app/views/Subscribe";

function Paywall() {
  return (
    <Main>
      <Subscribe />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Main>
  );
}

export default Paywall;

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
`;
const FooterWrapper = styled.div`
  padding-left: 6rem;
  padding-right: 3rem;
  width: 100%;
`;
