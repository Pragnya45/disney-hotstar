"use client";
import Settings from "@/app/views/Settings";
import styled from "styled-components";
import React from "react";
import Sidebar from "@/app/Components/Sidebar";
import Logo from "@/app/Components/Logo";
import BaseLayout from "@/app/Components/BaseLayout";

export default function Settingspage() {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Sidebar />
      </Nav>
      <Settings />
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
  height: 100vh;
  position: fixed;
  z-index: 20;
  opacity: 0.3;
  &:hover {
    width: 20%;
    opacity: 1;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
