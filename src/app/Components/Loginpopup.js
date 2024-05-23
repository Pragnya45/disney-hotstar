import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import ImageView from "@/app/Components/Image";
import TextField from "@mui/material/TextField";

const scanner = "/assets/images/scanner.png";
export default function Login() {
  return (
    <Wrapper>
      <LoginPopup>
        <Close size={32} color="#707a94" />
        <Heading>Login or sign up to continue</Heading>
        <SubHeading>Scan QR code or enter phone number to login</SubHeading>
        <Container>
          <ScannerContainer>
            <ImageView
              src={scanner}
              width={180}
              height={180}
              alt="scanner"
              style={{ borderRadius: "10px" }}
            />
            <ScannerHeading>Use Camera App to Scan QR</ScannerHeading>
            <ScannerSubHeading>
              Click on the link generated to redirect to Disney+ Hotstar mobile
              app
            </ScannerSubHeading>
          </ScannerContainer>
          <Divider>
            <OrText>OR</OrText>
          </Divider>
          <PhoneNumberContainer>
            <InstructionWrapper>
              <PhoneInputFieldWrapper>
                <Code>+91</Code>
                <StyledTextField
                  id="outlined-basic"
                  label="Enter mobile number"
                  variant="outlined"
                />
              </PhoneInputFieldWrapper>
              <PhoneFieldInstruction>
                By proceeding you confirm that you are above 18 years of age and
                agree to the <FieldSpan>Privacy Policy</FieldSpan> &{" "}
                <FieldSpan>Terms of use</FieldSpan>
              </PhoneFieldInstruction>
            </InstructionWrapper>
            <TroubleText>
              Having trouble logging in? <TroubleSpan>Get Help</TroubleSpan>
            </TroubleText>
          </PhoneNumberContainer>
        </Container>
      </LoginPopup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--overlay-color-3);
`;
const LoginPopup = styled.div`
  position: absolute;
  width: 65%;
  height: 70%;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  background: #16181f;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  gap: 0.3rem;
`;
const Close = styled(IoMdClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 30px;
  font-weight: 600;
  color: var(--text-color900);
`;
const SubHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-color1000);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 0 2rem;
`;
const ScannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ScannerHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color900);
`;
const ScannerSubHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 18px;
  font-weight: 400;
  color: var(--text-color1000);
  text-align: center;
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  height: 15rem;
  width: 1px;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(112, 122, 148, 0),
    #707a94 50%,
    rgba(112, 122, 148, 0)
  );
  margin: 0 4rem;
`;
const OrText = styled.p`
  background: #16181f;
  font-size: 14px;
  font-weight: 400;
  padding: 4px 0px;
  color: var(--text-color500);
`;
const PhoneNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;
const InstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const PhoneInputFieldWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
`;
const Code = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #4b5166;
  padding: 12px;
  background: transparent;
  color: #4b5166;
  width: 4rem;
  font-size: 16px;
  font-weight: 500;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: var(--text-color1000);
    font-family: 500;
  }
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color800);
    border-radius: 8px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color800);
    border-radius: 8px;
  }
  & .MuiOutlinedInput-input {
    color: var(--text-color900);
    font-size: 20px;
  }
`;

const PhoneFieldInstruction = styled.p`
  color: var(--text-color500);
  font-family: var(--FONT_FAMILY);
  font-size: 14px;
  line-height: 20px;
`;
const FieldSpan = styled.span`
  color: var(--text-color1000);
  font-weight: 600;
`;
const TroubleText = styled.p`
  color: var(--text-color1000);
  font-size: 16px;
`;
const TroubleSpan = styled.span`
  color: var(--text-color700);
  font-weight: 600;
`;
