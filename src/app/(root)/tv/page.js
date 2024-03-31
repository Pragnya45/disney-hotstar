"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "@/app/Components/Sidebar";
import Logo from "@/app/Components/Logo";
import TvPage from "@/app/views/Tv";
import BaseLayout from "@/app/Components/BaseLayout";

const Tv = () => {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Logo />
        <Sidebar />
      </Nav>
      <TvPage />
    </BaseLayout>
  );
};

export default Tv;

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
  @media (max-width: 600px) {
    display: none;
  }
`;
