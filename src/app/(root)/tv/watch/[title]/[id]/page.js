"use client";
import React from "react";
import WatchedTvdetails from "@/app/views/WatchedTvdetails";
import styled from "styled-components";

function Tv() {
  return (
    <Main>
      <WatchedTvdetails />
    </Main>
  );
}

export default Tv;

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
`;
const BackdropWidth = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  background: var(--sidenav-backdrop-color);
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 5%;
  height: 100vh;
  position: fixed;
  z-index: 20;
  &:hover {
    width: 20%;
  }
`;
const FooterWrapper = styled.div`
  padding-left: 6rem;
  padding-right: 3rem;
`;
