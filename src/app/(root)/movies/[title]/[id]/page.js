"use client";
import React from "react";
import Moviedetails from "@/app/views/Moviedetails";
import styled from "styled-components";
import Sidebar from "@/app/Components/Sidebar";
import BaseLayout from "@/app/Components/BaseLayout";

export default function Movie() {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Sidebar />
      </Nav>
      <Moviedetails />
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
