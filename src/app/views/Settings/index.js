import styled from "styled-components";
import CategoryPageList from "./CategoryPageList";
export default function Settings() {
  return (
    <Wrapper>
      <CategoryPageList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: var(--bg_color-gradient1000);
  padding-left: 6rem;
  display: flex;
`;
