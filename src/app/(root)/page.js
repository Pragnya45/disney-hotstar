"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Logo from "../Components/Logo";
import Banner from "../Components/Banner";

const page = () => {
  return (
    <Main>
      <Nav>
        <Logo />
        <Sidebar />
      </Nav>
      <Contentwrapper>
        <Banner />
      </Contentwrapper>
    </Main>
  );
};

export default page;

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 12%;
  position: fixed;
  z-index: 20;
`;
const Contentwrapper = styled.div`
  padding-right: 6rem;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
`;
