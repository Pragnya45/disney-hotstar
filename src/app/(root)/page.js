"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Logo from "../Components/Logo";
import Home from "../views/Home";
import BaseLayout from "../Components/BaseLayout";

export default function Homepage() {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Logo />
        <Sidebar />
      </Nav>
      <Home />
    </BaseLayout>
  );
}

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
