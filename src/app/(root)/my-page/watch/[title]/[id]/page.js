"use client";
import React from "react";
import WatchedTvdetails from "@/app/views/WatchedTvdetails";
import styled from "styled-components";

function Tv() {
  return (
    <Main>
      <WatchedTvdetails />
    </Main>
  );
}

export default Tv;

const Main = styled.div`
  background: var(--bg_color1000);
  width: 100%;
  min-height: 100vh;
`;
