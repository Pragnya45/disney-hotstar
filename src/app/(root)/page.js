"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Logo from "../Components/Logo";
import Banner from "../Components/Banner";
import Home from "../views/Home";
import Footer from "@/app/Components/Footer";
import ProductionHouse from "../Components/ProductionHouse";

const page = () => {
  return (
    <Main>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Logo />
        <Sidebar />
      </Nav>
      <Home />
      <Footer />
    </Main>
  );
};

export default page;

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
