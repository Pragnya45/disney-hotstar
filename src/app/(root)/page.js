"use client";
import styled from "styled-components";
import React from "react";
import Sidebar from "../Components/Sidebar";

const page = () => {
  return (
    <Main>
      <Sidebar />
    </Main>
  );
};

export default page;

const Main = styled.div`
  background: var(--bg_color);
  width: 100%;
  min-height: 100vh;
`;
