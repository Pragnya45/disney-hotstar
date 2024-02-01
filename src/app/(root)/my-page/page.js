"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "@/app/Components/Sidebar";
import MyPage from "@/app/views/MyPage";

function MySpace() {
  return (
    <Main>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Sidebar />
      </Nav>
      <MyPage />
    </Main>
  );
}

export default MySpace;
const Main = styled.div`
  background: linear-gradient(
    180deg,
    #081734,
    #0d1628 73px,
    #0e1420 168px,
    #0f1014 256px,
    #0f1014
  );
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
