"use client";
import React from "react";
import Sportsdetails from "@/app/views/Sportsdetails";
import styled from "styled-components";

export default function Sports() {
  return (
    <Main>
      <Sportsdetails />
    </Main>
  );
}

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
`;
