"use client";
import React from "react";
import styled from "styled-components";
import Logo from "@/app/Components/Logo";
import Sidebar from "@/app/Components/Sidebar";
import Sport from "@/app/views/Sport";
import BaseLayout from "@/app/Components/BaseLayout";

function Sports() {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Logo />
        <Sidebar />
      </Nav>
      <Sport />
    </BaseLayout>
  );
}

export default Sports;

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
