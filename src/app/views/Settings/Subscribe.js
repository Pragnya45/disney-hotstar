import styled from "styled-components";
import { MdOutlineComputer } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

const star = "/assets/icons/stars.svg";

export default function Subscribe() {
  const devicedata = [
    {
      heading: "This Device",
      icon: <MdOutlineComputer color="#e1e6f0" size={30} />,
      title: "Web Browser",
      used: "Today",
    },
    {
      heading: "Other Devices",
      icon: <BsPhone color="#e1e6f0" size={30} />,
      title: "Android Phone/Tablet",
      used: "5 Days ago",
    },
  ];
  return (
    <Wrapper>
      <SubscribeWrapper>
        <Heading>Subscribe to enjoy Disney+ Hotstar</Heading>
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </SubscribeWrapper>
      <SubscribeWrapper>
        <NumberWrapper>
          <NumberText>Registered Mobile Number</NumberText>
          <Number>+91 9********8</Number>
        </NumberWrapper>
        <UpdateBtn>Update</UpdateBtn>
      </SubscribeWrapper>

      {devicedata?.map((device, index) => (
        <DeviceWrapper key={index}>
          <Heading>{device?.heading}</Heading>
          <DeviceContentWrapper>
            <DeviceData>
              {device?.icon}
              <Details>
                <Device>{device?.title}</Device>
                <Used>Last Used : {device?.used}</Used>
              </Details>
            </DeviceData>
            <LogoutBtn>Log Out</LogoutBtn>
          </DeviceContentWrapper>
        </DeviceWrapper>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: url(${star}) no-repeat;
  display: flex;
  flex-direction: column;
  background-size: 100% auto;
  padding: 4rem;
  width: 100%;
  gap: 3.5rem;
`;
const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
const DeviceContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;

  &:hover {
    background-color: var(--bg_color600);
    border-radius: 10px;
  }
`;
const Heading = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color900);
`;
const NumberText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color300);
`;
const Number = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color900);
`;
const SubscribeBtn = styled.button`
  width: 110px;
  border-radius: 6px;
  background-color: var(--bg_color600);
  color: white;
  border: none;
  outline: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  cursor: pointer;
`;
const LogoutBtn = styled.button`
  width: 110px;
  border-radius: 6px;
  background-color: var(--bg_color600);
  color: white;
  border: none;
  outline: none;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--bg_color500);
  }
`;
const UpdateBtn = styled.button`
  width: 120px;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  cursor: pointer;
`;
const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`;
const DeviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;
const DeviceData = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Device = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--text-color900);
`;
const Used = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-color1000);
`;
