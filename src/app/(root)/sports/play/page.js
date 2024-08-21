"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "@/app/Components/Sidebar";
import BaseLayout from "@/app/Components/BaseLayout";
import SportDetails from "@/app/views/Sportsdetails";

function Tv() {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Sidebar />
      </Nav>
      <SportDetails />
    </BaseLayout>
  );
}

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
`;
