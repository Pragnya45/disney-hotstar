"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "@/app/Components/Sidebar";
import Category from "@/app/views/Category";
import BaseLayout from "@/app/Components/BaseLayout";

function Categories() {
  return (
    <BaseLayout>
      <Nav>
        <BackdropWidth></BackdropWidth>
        <Sidebar />
      </Nav>
      <Category />
    </BaseLayout>
  );
}

export default Categories;

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
  @media (max-width: 600px) {
    display: none;
  }
`;
