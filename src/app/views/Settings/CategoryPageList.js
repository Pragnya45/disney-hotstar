import { RiAccountCircleLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa6";
import ImageView from "@/app/Components/Image";

export default function CategoryPageList() {
  const categories = [
    {
      title: "Subscription & Devices",
      subtitle: "Manage Subscription & Devices",
      icon: <RiAccountCircleLine size={30} color="#e1e6f0" />,
    },
    {
      title: "Parental Controls",
      subtitle: "Parental Controls",
      icon: <MdLockOutline size={30} color="#e1e6f0" />,
    },
    {
      title: "Help & Support",
      subtitle: "Help Centre",
      icon: <MdOutlineHelpOutline size={30} color="#e1e6f0" />,
    },
  ];
  return (
    <CategoryWrapper>
      <Heading>Help & Settings</Heading>
      <CategoryListWrapper>
        {categories?.map((category, index) => (
          <Categories key={index}>
            {category?.icon}
            <ContentWrapper>
              <Content>
                <Title>{category?.title}</Title>
                <Subtitle>{category?.subtitle}</Subtitle>
              </Content>
              <StyledLeft color="#707a94" size={12} />
            </ContentWrapper>
          </Categories>
        ))}
      </CategoryListWrapper>
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem 1rem 1rem 2rem;
`;
const Heading = styled.h1`
  color: var(--text-color900);
  font-size: 30px;
  font-weight: 600;
  margin-left: 1rem;
`;
const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Categories = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  min-width: 25rem;
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const StyledLeft = styled(FaAngleRight)`
  margin-left: auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.p`
  color: var(--text-color900);
  font-size: 16px;
  font-weight: 600;
`;
const Subtitle = styled.p`
  color: var(--text-color500);
  font-size: 14px;
  font-weight: 400;
  margin-top: 0.5rem;
`;
