"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "@/app/Components/Sidebar";
import Footer from "@/app/Components/Footer";
import Explore from "@/app/views/Explore";

function Search() {
  return (
    <Main>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Sidebar />
      </Nav>
      <Explore />
      <Footer />
    </Main>
  );
}

export default Search;
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
