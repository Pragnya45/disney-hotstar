"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Logo from "../Components/Logo";

const page = () => {
  return (
    <Main>
      <Logo />
      {/* <Sidebar /> */}
    </Main>
  );
};

export default page;

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
`;
